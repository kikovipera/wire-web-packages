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

/* eslint-disable no-magic-numbers */
const {APIClient} = require('@wireapp/api-client');
const {Account} = require('@wireapp/core');
const {GenericMessage, Text} = require('@wireapp/protocol-messaging');
const {MemoryEngine} = require('@wireapp/store-engine');

const PayloadHelper = require('../test/PayloadHelper');

const createMessage = content => {
  const customTextMessage = GenericMessage.create({
    messageId: PayloadHelper.getUUID(),
    text: Text.create({content}),
  });

  return GenericMessage.encode(customTextMessage).finish();
};

const generatePreKeyBundle = (userCount, clientsPerUser) => {
  const prekeyBundle = {};
  for (let userIndex = 0; userIndex < userCount; userIndex++) {
    const userId = PayloadHelper.getUUID();
    prekeyBundle[userId] = {};
    for (let clientIndex = 0; clientIndex < clientsPerUser; clientIndex++) {
      const clientId = PayloadHelper.getUUID();
      prekeyBundle[userId][clientId] = {};
    }
  }
  return prekeyBundle;
};

describe('ConversationService', () => {
  let account;

  beforeAll(async () => {
    const engine = new MemoryEngine();
    await engine.init('');

    const client = new APIClient({store: engine, urls: APIClient.BACKEND.STAGING});

    account = new Account(client);
    await account.init();
  });

  describe("'shouldSendAsExternal'", () => {
    it('returns true for a big payload', () => {
      const {conversation} = account.service;
      const preKeyBundles = generatePreKeyBundle(128, 4);

      const longMessage =
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem';
      const plainText = createMessage(longMessage);

      const shouldSendAsExternal = conversation.shouldSendAsExternal(plainText, preKeyBundles);
      expect(shouldSendAsExternal).toBe(true);
    });

    it('returns false for a small payload', async done => {
      const {conversation} = account.service;
      const preKeyBundles = generatePreKeyBundle(2, 1);

      const shortMessage = PayloadHelper.getUUID();
      const plainText = createMessage(shortMessage);

      const shouldSendAsExternal = conversation.shouldSendAsExternal(plainText, preKeyBundles);
      expect(shouldSendAsExternal).toBe(false);

      done();
    });

    it('adds missing prekeys', async () => {
      const aliceId = PayloadHelper.getUUID();
      const aliceClientId = PayloadHelper.getUUID();
      const bobId = PayloadHelper.getUUID();
      const bobClientId = PayloadHelper.getUUID();

      const initialPreKeyBundles = {
        [aliceId]: {
          [PayloadHelper.getUUID()]: {},
        },
      };

      spyOn(account.apiClient.conversation.api, 'postOTRMessage').and.callFake(
        (sendingClientId, conversationId, message) =>
          new Promise((resolve, reject) => {
            if (message.recipients[aliceId] && !message.recipients[aliceId][aliceClientId]) {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject({
                response: {
                  data: {
                    deleted: {},
                    missing: {
                      [aliceId]: [aliceClientId],
                      [bobId]: [bobClientId],
                    },
                    redundant: {},
                    time: new Date().toISOString(),
                  },
                  status: 412,
                },
              });
            } else {
              resolve();
            }
          })
      );
      spyOn(account.apiClient.user.api, 'postMultiPreKeyBundles').and.returnValue(
        Promise.resolve({
          [aliceId]: {
            [aliceClientId]: {},
          },
          [bobId]: {
            [bobClientId]: {},
          },
        })
      );

      const payload = createMessage('Hello, world!');
      const recipients = await account.service.cryptography.encrypt(payload, initialPreKeyBundles);
      expect(recipients[aliceId]).toBeDefined();
      expect(recipients[aliceId][aliceClientId]).toBeUndefined();
      expect(recipients[bobId]).toBeUndefined();

      await account.service.conversation.sendOTRMessage(aliceId, PayloadHelper.getUUID(), recipients, payload);
      expect(recipients[aliceId][aliceClientId]).toBeDefined();
      expect(recipients[bobId][bobClientId]).toBeDefined();
    });

    it('removes deleted prekeys', async () => {
      const aliceId = PayloadHelper.getUUID();
      const aliceClientId = PayloadHelper.getUUID();

      const initialPreKeyBundles = {
        [aliceId]: {
          [PayloadHelper.getUUID()]: {},
          [aliceClientId]: {},
        },
      };

      spyOn(account.apiClient.conversation.api, 'postOTRMessage').and.callFake(
        (sendingClientId, conversationId, message) =>
          new Promise((resolve, reject) => {
            if (message.recipients[aliceId] && message.recipients[aliceId][aliceClientId]) {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject({
                response: {
                  data: {
                    deleted: {
                      [aliceId]: [aliceClientId],
                    },
                    missing: {},
                    redundant: {},
                    time: new Date().toISOString(),
                  },
                  status: 412,
                },
              });
            } else {
              resolve();
            }
          })
      );
      spyOn(account.apiClient.user.api, 'postMultiPreKeyBundles').and.returnValue(Promise.resolve());

      const payload = createMessage('Hello, world!');
      const recipients = await account.service.cryptography.encrypt(payload, initialPreKeyBundles);
      expect(recipients[aliceId][aliceClientId]).toBeDefined();

      await account.service.conversation.sendOTRMessage(aliceId, PayloadHelper.getUUID(), recipients, payload);
      expect(recipients[aliceId]).toBeDefined();
      expect(recipients[aliceId][aliceClientId]).toBeUndefined();
    });
  });

  describe('"createText"', () => {
    it('adds link previews correctly', async () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      const url = 'http://example.com';

      const permanentUrl = url;
      const summary = 'Summary';
      const text = url;
      const title = 'Title';
      const tweet = {
        author: 'Author',
        username: 'Username',
      };
      const urlOffset = 0;

      const linkPreview = await account.service.conversation.messageBuilder.createLinkPreview({
        permanentUrl,
        summary,
        title,
        tweet,
        url,
        urlOffset,
      });
      const textMessage = account.service.conversation.messageBuilder
        .createText(undefined, text)
        .withLinkPreviews([linkPreview])
        .build();

      expect(textMessage.content.text).toEqual(text);
      expect(textMessage.content.linkPreviews).toEqual(jasmine.any(Array));
      expect(textMessage.content.linkPreviews.length).toBe(1);

      expect(textMessage.content.linkPreviews[0]).toEqual(
        jasmine.objectContaining({
          permanentUrl,
          summary,
          title,
          tweet,
          url,
          urlOffset,
        })
      );
    });

    it('does not add link previews', () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      const text = 'Hello, world!';
      const textMessage = account.service.conversation.messageBuilder.createText(undefined, text).build();

      expect(textMessage.content.linkPreviews).toBeUndefined();
    });

    it('uploads link previews', async () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      spyOn(account.service.asset, 'uploadImageAsset').and.returnValue(
        Promise.resolve({
          cipherText: Buffer.from([]),
          key: '',
          keyBytes: Buffer.from([]),
          sha256: Buffer.from([]),
          token: '',
        })
      );

      const url = 'http://example.com';
      const image = {
        data: Buffer.from([]),
        height: 123,
        type: 'image/jpeg',
        width: 456,
      };
      const text = url;
      const urlOffset = 0;

      const linkPreview = await account.service.conversation.messageBuilder.createLinkPreview({image, url, urlOffset});
      const textMessage = account.service.conversation.messageBuilder
        .createText(undefined, text)
        .withLinkPreviews([linkPreview])
        .build();

      expect(account.service.asset.uploadImageAsset).toHaveBeenCalledTimes(1);

      expect(textMessage.content.linkPreviews).toEqual(jasmine.any(Array));
      expect(textMessage.content.linkPreviews.length).toBe(1);

      expect(textMessage.content.linkPreviews[0]).toEqual(
        jasmine.objectContaining({
          url,
          urlOffset,
        })
      );
    });

    it('adds mentions correctly', () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      const text = 'Hello @user!';

      const mention = {
        end: 11,
        start: 6,
        userId: PayloadHelper.getUUID(),
      };

      const textMessage = account.service.conversation.messageBuilder
        .createText(undefined, text)
        .withMentions([mention])
        .build();

      expect(textMessage.content.text).toEqual(text);
      expect(textMessage.content.mentions).toEqual(jasmine.any(Array));
      expect(textMessage.content.mentions.length).toBe(1);

      expect(textMessage.content.mentions[0]).toEqual(jasmine.objectContaining(mention));
    });

    it('does not add mentions', () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      const text = 'Hello, world!';
      const textMessage = account.service.conversation.messageBuilder.createText(text).build();

      expect(textMessage.content.mentions).toBeUndefined();
    });

    it('adds a quote correctly', () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      const quoteId = PayloadHelper.getUUID();
      const textSHA256 = PayloadHelper.getUUID();

      const text = 'I totally agree.';

      const quote = {
        id: quoteId,
        sha256: textSHA256,
      };

      const replyMessage = account.service.conversation.messageBuilder
        .createText(undefined, text)
        .withQuote(quote)
        .build();

      expect(replyMessage.content.text).toEqual(text);
      expect(replyMessage.content.quote).toEqual(jasmine.objectContaining({id: quoteId, sha256: textSHA256}));
      expect(replyMessage.content.quote).toEqual(jasmine.objectContaining(quote));
    });

    it('does not add a quote', () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      const text = 'Hello, world!';
      const textMessage = account.service.conversation.messageBuilder.createText(undefined, text).build();

      expect(textMessage.content.quote).toBeUndefined();
    });

    it('adds a read confirmation request correctly', () => {
      account.apiClient.context = {
        userId: PayloadHelper.getUUID(),
      };

      const text = 'Please read me';

      const replyMessage = account.service.conversation.messageBuilder
        .createText(undefined, text)
        .withReadConfirmation(true)
        .build();

      expect(replyMessage.content.text).toEqual(text);
      expect(replyMessage.content.expectsReadConfirmation).toEqual(true);
    });
  });
});
