/*
 * Wire
 * Copyright (C) 2016 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

/* eslint no-magic-numbers: "off" */

const Proteus = require('@wireapp/proteus');
const cryptobox = require('@wireapp/cryptobox');
const LRUCache = require('@wireapp/lru-cache').default;

describe('cryptobox.store.IndexedDB', () => {
  let storeName = 'wire@production@532af01e-1e24-4366-aacf-33b67d4ee376@temporary';
  let store = undefined;

  beforeEach(() => (store = new cryptobox.store.IndexedDB(storeName)));

  afterEach(done => {
    if (store) {
      store
        .delete_all()
        .then(done)
        .catch(done.fail);
    }

    window.indexedDB.deleteDatabase(storeName);
  });

  describe('Basic functionality', () => {
    it('removes PreKeys from the storage (when a session gets established) and creates new PreKeys if needed.', async done => {
      const alice = {
        // PreKeys: ["65535", "0", "1"]
        desktop: new cryptobox.Cryptobox(new cryptobox.store.IndexedDB('alice_desktop'), 3),
      };

      const bob = {
        // PreKeys: ["65535"]
        desktop: new cryptobox.Cryptobox(new cryptobox.store.IndexedDB('bob_desktop'), 1),
        // PreKeys: ["65535"]
        mobile: new cryptobox.Cryptobox(new cryptobox.store.IndexedDB('bob_mobile'), 1),
      };

      spyOn(alice.desktop, 'publish_prekeys').and.callThrough();
      spyOn(alice.desktop.pk_store, 'release_prekeys').and.callThrough();

      const messageFromBob = 'Hello Alice!';

      await Promise.all([alice.desktop.create(), bob.desktop.create(), bob.mobile.create()]);
      expect(alice.desktop.cachedPreKeys.length).toBe(3);
      expect(bob.desktop.cachedPreKeys.length).toBe(1);
      expect(bob.mobile.cachedPreKeys.length).toBe(1);

      let prekey = await alice.desktop.store.load_prekey(0);
      expect(prekey).toBeDefined();

      // Bob sends a message (with PreKey material and ciphertext) to Alice's desktop client
      let publicPreKeyBundle = await Proteus.keys.PreKeyBundle.new(alice.desktop.identity.public_key, prekey);
      let ciphertext = await bob.desktop.encrypt('to_alice_desktop', messageFromBob, publicPreKeyBundle.serialise());
      expect(alice.desktop.pk_store.prekeys.length).toBe(0);
      expect(alice.desktop.publish_prekeys).not.toHaveBeenCalled();

      let plaintext = await alice.desktop.decrypt('to_bob_desktop', ciphertext);
      const expectedNewPreKeyId = 2;
      expect(alice.desktop.pk_store.prekeys.length).toBe(0);
      expect(alice.desktop.cachedSessions.size()).toBe(1);
      expect(alice.desktop.pk_store.release_prekeys.calls.count()).toBe(1);
      expect(alice.desktop.publish_prekeys.calls.count()).toBe(1);
      expect(alice.desktop.cachedPreKeys[alice.desktop.cachedPreKeys.length - 1].key_id).toBe(expectedNewPreKeyId);
      expect(sodium.to_string(plaintext)).toBe(messageFromBob);

      prekey = await alice.desktop.store.load_prekey(expectedNewPreKeyId);
      publicPreKeyBundle = await Proteus.keys.PreKeyBundle.new(alice.desktop.identity.public_key, prekey);
      ciphertext = await bob.mobile.encrypt('to_alice_desktop', messageFromBob, publicPreKeyBundle.serialise());
      expect(alice.desktop.pk_store.prekeys.length).toBe(0);

      plaintext = await alice.desktop.decrypt('to_bob_mobile', ciphertext);
      expect(alice.desktop.pk_store.prekeys.length).toBe(0);
      expect(alice.desktop.cachedSessions.size()).toBe(2);
      expect(alice.desktop.pk_store.release_prekeys.calls.count()).toBe(2);
      expect(alice.desktop.publish_prekeys.calls.count()).toBe(2); // Published PreKey ID "3"
      expect(await sodium.to_string(plaintext)).toBe(messageFromBob);

      done();
    });
  });

  describe('"constructor"', () => {
    it('works with a given Dexie instance', () => {
      const schema = {
        amplify: '',
        clients: ', meta.primary_key',
        conversation_events: ', conversation, time, type',
        conversations: ', id, last_event_timestamp',
        keys: '',
        prekeys: '',
        sessions: '',
      };

      const db = new Dexie(storeName);
      db.version(7).stores(schema);

      store = new cryptobox.store.IndexedDB(db);

      expect(store.db.name).toBe(storeName);
      expect(Object.keys(db._dbSchema).length).toBe(7);
    });
  });

  describe('"create"', () => {
    it("doesn't save null values", async done => {
      const schema = {
        amplify: '',
        clients: ', meta.primary_key',
        conversation_events: ', conversation, time, type',
        conversations: ', id, last_event_timestamp',
        keys: '',
        prekeys: '',
        sessions: '',
      };

      storeName = 'wire@production@532af01e-1e24-4366-aacf-33b67d4ee377@temporary';
      const db = new Dexie(storeName);
      db.version(1).stores(schema);

      store = new cryptobox.store.IndexedDB(db);
      expect(store.db.name).toBe(storeName);

      try {
        await store.create(name, 'sessions', null);
        done.fail(new Error('Expected error'));
      } catch (error) {
        expect(error.name).toBe('RecordTypeError');
        done();
      }
    });
  });

  describe('"create_session"', () => {
    it('saves a session with meta data', async done => {
      const alice = await Proteus.keys.IdentityKeyPair.new();

      const bob = await Proteus.keys.IdentityKeyPair.new();
      const preKey = await Proteus.keys.PreKey.new(Proteus.keys.PreKey.MAX_PREKEY_ID);
      const bobPreKeyBundle = await Proteus.keys.PreKeyBundle.new(bob.public_key, preKey);

      const sessionId = 'session_with_bob';

      const proteusSession = await Proteus.session.Session.init_from_prekey(alice, bobPreKeyBundle);
      await store.create_session(sessionId, proteusSession);

      const serialisedSession = await store.read(store.TABLE.SESSIONS, sessionId);
      expect(serialisedSession.created).toEqual(jasmine.any(Number));
      expect(serialisedSession.version).toEqual(cryptobox.Cryptobox.prototype.VERSION);

      const loadedSession = await store.read_session(alice, sessionId);
      expect(loadedSession.session_tag).toEqual(proteusSession.session_tag);

      done();
    });
  });

  describe('"session_from_prekey"', () => {
    it('saves and caches a valid session from a serialized PreKey bundle', async done => {
      storeName = 'alice_db';

      const alice = new cryptobox.Cryptobox(new cryptobox.store.IndexedDB(storeName), 1);
      const sessionId = 'session_with_bob';

      const bob = await Proteus.keys.IdentityKeyPair.new();
      const preKey = await Proteus.keys.PreKey.new(Proteus.keys.PreKey.MAX_PREKEY_ID);
      const bobPreKeyBundle = await Proteus.keys.PreKeyBundle.new(bob.public_key, preKey);

      const allPreKeys = await alice.create();
      expect(allPreKeys.length).toBe(1);

      let cryptoboxSession = await alice.session_from_prekey(sessionId, bobPreKeyBundle.serialise());
      expect(cryptoboxSession.fingerprint_remote()).toBe(bob.public_key.fingerprint());

      cryptoboxSession = alice.load_session_from_cache(sessionId);
      expect(cryptoboxSession.fingerprint_remote()).toBe(bob.public_key.fingerprint());

      cryptoboxSession = await alice.session_from_prekey(sessionId, bobPreKeyBundle.serialise());
      expect(cryptoboxSession.fingerprint_remote()).toBe(bob.public_key.fingerprint());

      done();
    });

    it('reinforces a session from the indexedDB without cache', async done => {
      const alice = new cryptobox.Cryptobox(new cryptobox.store.IndexedDB(storeName), 1);
      const sessionId = 'session_with_bob';

      try {
        const bob = await Proteus.keys.IdentityKeyPair.new();
        const preKey = await Proteus.keys.PreKey.new(Proteus.keys.PreKey.MAX_PREKEY_ID);
        const bobPreKeyBundle = await Proteus.keys.PreKeyBundle.new(bob.public_key, preKey);

        const allPreKeys = await alice.create();
        expect(allPreKeys.length).toBe(1);

        let cryptoboxSession = await alice.session_from_prekey(sessionId, bobPreKeyBundle.serialise());
        expect(cryptoboxSession.fingerprint_remote()).toBe(bob.public_key.fingerprint());

        alice.cachedSessions = new LRUCache(1);

        cryptoboxSession = await alice.session_from_prekey(sessionId, bobPreKeyBundle.serialise());
        expect(cryptoboxSession.fingerprint_remote()).toBe(bob.public_key.fingerprint());

        done();
      } catch (error) {
        done.fail(error);
      }
    });
  });

  describe('"update_session"', () => {
    it('updates an already persisted session', async done => {
      const aliceIdentity = await Proteus.keys.IdentityKeyPair.new();
      const bobIdentity = await Proteus.keys.IdentityKeyPair.new();
      const bobLastResortPreKey = await Proteus.keys.PreKey.new(Proteus.keys.PreKey.MAX_PREKEY_ID);
      const bobPreKeyBundle = await Proteus.keys.PreKeyBundle.new(bobIdentity.public_key, bobLastResortPreKey);
      const sessionId = 'my_session_with_bob';

      let proteusSession = await Proteus.session.Session.init_from_prekey(aliceIdentity, bobPreKeyBundle);
      await store.create_session(sessionId, proteusSession);

      expect(proteusSession.local_identity.public_key.fingerprint()).toBe(aliceIdentity.public_key.fingerprint());
      expect(proteusSession.remote_identity.public_key.fingerprint()).toBe(bobIdentity.public_key.fingerprint());
      expect(proteusSession.version).toBe(1);
      proteusSession.version = 2;

      proteusSession = await store.update_session(sessionId, proteusSession);

      expect(proteusSession.local_identity.public_key.fingerprint()).toBe(aliceIdentity.public_key.fingerprint());
      expect(proteusSession.remote_identity.public_key.fingerprint()).toBe(bobIdentity.public_key.fingerprint());
      expect(proteusSession.version).toBe(2);

      done();
    });
  });
});