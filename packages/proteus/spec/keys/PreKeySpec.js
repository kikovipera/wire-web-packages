/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
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
const _sodium = require('libsodium-wrappers-sumo');
let sodium = _sodium;

beforeAll(async () => {
  await _sodium.ready;
  sodium = _sodium;
});

describe('PreKey', () => {
  describe('Generation', () => {
    it('generates a PreKey', async done => {
      try {
        const key_id = 0;
        const pk = await Proteus.keys.PreKey.new(key_id);
        expect(pk.key_id).toBe(key_id);
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('generates a PreKey of last resort', async done => {
      try {
        const pk = await Proteus.keys.PreKey.last_resort();
        expect(pk.key_id).toBe(Proteus.keys.PreKey.MAX_PREKEY_ID);
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('rejects undefined IDs', async done => {
      try {
        await Proteus.keys.PreKey.new(undefined);
        done.fail();
      } catch (error) {
        expect(error instanceof Proteus.errors.InputError.TypeError).toBe(true);
        expect(error.code).toBe(Proteus.errors.InputError.CODE.CASE_404);
        done();
      }
    });

    it('rejects string IDs', async done => {
      try {
        await Proteus.keys.PreKey.new('foo');
        done.fail();
      } catch (error) {
        expect(error instanceof Proteus.errors.InputError.TypeError).toBe(true);
        expect(error.code).toBe(Proteus.errors.InputError.CODE.CASE_403);
        done();
      }
    });

    it('rejects too low IDs', async done => {
      try {
        await Proteus.keys.PreKey.new(-1);
        done.fail();
      } catch (error) {
        expect(error instanceof Proteus.errors.InputError.RangeError).toBe(true);
        expect(error.code).toBe(Proteus.errors.InputError.CODE.CASE_400);
        done();
      }
    });

    it('rejects too high IDs', async done => {
      try {
        await Proteus.keys.PreKey.new(65537);
        done.fail();
      } catch (error) {
        expect(error instanceof Proteus.errors.InputError.RangeError).toBe(true);
        expect(error.code).toBe(Proteus.errors.InputError.CODE.CASE_400);
        done();
      }
    });

    it('rejects floating point IDs', async done => {
      try {
        await Proteus.keys.PreKey.new(4242.42);
        done.fail();
      } catch (error) {
        expect(error instanceof Proteus.errors.InputError.TypeError).toBe(true);
        expect(error.code).toBe(Proteus.errors.InputError.CODE.CASE_403);
        done();
      }
    });

    it('throws errors with error codes', async done => {
      try {
        await Proteus.keys.PreKey.new(Proteus.keys.PreKey.MAX_PREKEY_ID + 1);
        done.fail();
      } catch (error) {
        expect(error instanceof Proteus.errors.InputError.RangeError).toBe(true);
        expect(error.code).toBe(Proteus.errors.InputError.CODE.CASE_400);
        done();
      }
    });

    it('generates ranges of PreKeys', async done => {
      try {
        let prekeys = await Proteus.keys.PreKey.generate_prekeys(0, 0);
        expect(prekeys.length).toBe(0);

        prekeys = await Proteus.keys.PreKey.generate_prekeys(0, 1);
        expect(prekeys.length).toBe(1);
        expect(prekeys[0].key_id).toBe(0);

        prekeys = await Proteus.keys.PreKey.generate_prekeys(0, 10);
        expect(prekeys.length).toBe(10);
        expect(prekeys[0].key_id).toBe(0);
        expect(prekeys[9].key_id).toBe(9);

        prekeys = await Proteus.keys.PreKey.generate_prekeys(3000, 10);
        expect(prekeys.length).toBe(10);
        expect(prekeys[0].key_id).toBe(3000);
        expect(prekeys[9].key_id).toBe(3009);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('does not include the last resort pre key', async done => {
      try {
        let prekeys = await Proteus.keys.PreKey.generate_prekeys(65530, 10);
        expect(prekeys.length).toBe(10);
        expect(prekeys[0].key_id).toBe(65530);
        expect(prekeys[1].key_id).toBe(65531);
        expect(prekeys[2].key_id).toBe(65532);
        expect(prekeys[3].key_id).toBe(65533);
        expect(prekeys[4].key_id).toBe(65534);
        expect(prekeys[5].key_id).toBe(0);
        expect(prekeys[6].key_id).toBe(1);
        expect(prekeys[7].key_id).toBe(2);
        expect(prekeys[8].key_id).toBe(3);
        expect(prekeys[9].key_id).toBe(4);

        prekeys = await Proteus.keys.PreKey.generate_prekeys(Proteus.keys.PreKey.MAX_PREKEY_ID, 1);
        expect(prekeys.length, 1);
        expect(prekeys[0].key_id).toBe(0);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  describe('Serialisation', () => {
    it('serialises and deserialises correctly', async done => {
      try {
        const pk = await Proteus.keys.PreKey.new(0);
        const pk_bytes = pk.serialise();
        const pk_copy = Proteus.keys.PreKey.deserialise(pk_bytes);

        expect(pk_copy.version).toBe(pk.version);
        expect(pk_copy.key_id).toBe(pk.key_id);
        expect(pk_copy.key_pair.public_key.fingerprint()).toBe(pk.key_pair.public_key.fingerprint());
        expect(sodium.to_hex(new Uint8Array(pk_bytes))).toBe(sodium.to_hex(new Uint8Array(pk_copy.serialise())));

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
