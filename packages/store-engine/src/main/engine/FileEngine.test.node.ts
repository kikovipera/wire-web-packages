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

import * as fs from 'fs-extra';
import * as path from 'path';

import {FileEngine} from '../engine';
import appendSpec from '../test/appendSpec';
import createSpec from '../test/createSpec';
import deleteAllSpec from '../test/deleteAllSpec';
import deleteSpec from '../test/deleteSpec';
import purgeSpec from '../test/purgeSpec';
import readAllPrimaryKeysSpec from '../test/readAllPrimaryKeysSpec';
import readAllSpec from '../test/readAllSpec';
import readSpec from '../test/readSpec';
import updateOrCreateSpec from '../test/updateOrCreateSpec';
import updateSpec from '../test/updateSpec';
import CRUDEngine from './CRUDEngine';
import {PathValidationError} from './error';

const BASE_DIRECTORY = path.join(process.cwd(), '.tmp');
const STORE_NAME = 'the-simpsons';
const TEST_DIRECTORY = path.join(BASE_DIRECTORY, STORE_NAME);

let engine: FileEngine;

async function initEngine(shouldCreateNewEngine = true) {
  const storeEngine = shouldCreateNewEngine ? new FileEngine(BASE_DIRECTORY) : engine;
  await storeEngine.init(STORE_NAME);
  return storeEngine;
}

beforeEach(async done => {
  FileEngine.path = path;
  engine = await initEngine();
  done();
});

afterEach(done =>
  fs
    .remove(TEST_DIRECTORY)
    .then(done)
    .catch(done.fail)
);

describe('enforcePathRestrictions', () => {
  const enforcePathRestrictions = (givenTrustedRoot: string, givenPath: string) => () =>
    FileEngine.enforcePathRestrictions(givenTrustedRoot, givenPath);
  const expectedError = PathValidationError;
  const unixFolder = '/home/marge/test/';
  const windowsFolder = 'C:\\Users\\bart\\Documents\\Database\\';

  it('allows dots inside of primary keys.', () => {
    const tableName = 'amplify';
    const primaryKey = 'z.storage.StorageKey.EVENT.LAST_DATE';

    FileEngine.path = path.posix;
    const actual = FileEngine.enforcePathRestrictions(FileEngine.path.join(unixFolder, tableName), primaryKey);
    expect(actual).toBeDefined();
  });

  it('allows slashes inside of primary keys as long as they do not navigate outside of the base folder.', () => {
    FileEngine.path = path.posix;
    expect(FileEngine.enforcePathRestrictions(unixFolder, 'users/..')).toBeDefined();
    expect(FileEngine.enforcePathRestrictions(unixFolder, 'users/../')).toBeDefined();
    expect(FileEngine.enforcePathRestrictions(unixFolder, 'users/../sandbox')).toBeDefined();
    expect(FileEngine.enforcePathRestrictions(unixFolder, 'users/me')).toBeDefined();
    expect(FileEngine.enforcePathRestrictions(unixFolder, 'a/b/c/d/e/f/g/../../../../ok')).toBeDefined();
    expect(FileEngine.enforcePathRestrictions(unixFolder, 'a/b/c/../../../')).toBeDefined();
    expect(enforcePathRestrictions(unixFolder, 'a/b/c/../../../../')).toThrowError(expectedError);
  });

  it('allows empty strings.', () => {
    const tableName = 'amplify';
    const primaryKey = '';

    FileEngine.path = path.posix;
    const actual = FileEngine.enforcePathRestrictions(FileEngine.path.join(unixFolder, tableName), primaryKey);
    expect(actual).toBeDefined();
  });

  it('throws errors on path traversals.', () => {
    FileEngine.path = path.win32;
    expect(enforcePathRestrictions(windowsFolder, 'malicious\\..\\..\\test\\..\\..')).toThrowError(expectedError);
    expect(enforcePathRestrictions(windowsFolder, '\\malicious\\..\\\\..entry\\..\\..')).toThrowError(expectedError);
    expect(enforcePathRestrictions(windowsFolder, 'malicious\\..\\entry\\..\\..')).toThrowError(expectedError);
    expect(enforcePathRestrictions(windowsFolder, '\\\\server\\..\\..\\..')).toThrowError(expectedError);
    expect(enforcePathRestrictions(windowsFolder, 'malicious\\..\\..\\entry\\..\\')).toThrowError(expectedError);
    expect(enforcePathRestrictions(windowsFolder, '..\\etc')).toThrowError(expectedError);

    FileEngine.path = path.posix;
    expect(enforcePathRestrictions(unixFolder, '../etc')).toThrowError(expectedError);
    expect(enforcePathRestrictions(unixFolder, '/malicious/../../../entry/../test')).toThrowError(expectedError);
    expect(enforcePathRestrictions(unixFolder, 'malicious/../../../entry/..')).toThrowError(expectedError);
    expect(enforcePathRestrictions(unixFolder, 'documents/../../../../../etc/hosts')).toThrowError(expectedError);
    expect(enforcePathRestrictions(unixFolder, 'malicious/../../../entry/../')).toThrowError(expectedError);
    expect(enforcePathRestrictions(unixFolder, '../etc')).toThrowError(expectedError);
    expect(enforcePathRestrictions(unixFolder, 'users/../../tigris')).toThrowError(expectedError);
    expect(enforcePathRestrictions(unixFolder, 'users/../tigris/../../')).toThrowError(expectedError);
  });

  it('throws errors when attempting to use the root folder as a trusted root.', () => {
    FileEngine.path = path.posix;
    expect(enforcePathRestrictions('/', 'etc/hosts')).toThrowError(expectedError);

    FileEngine.path = path.win32;
    expect(enforcePathRestrictions('C:/', '\\Windows\\System32\\drivers\\etc\\hosts')).toThrowError(expectedError);
  });

  it('is applied to all store operations.', async done => {
    const functionNames = [
      'append',
      'create',
      'delete',
      'deleteAll',
      'read',
      'readAll',
      'readAllPrimaryKeys',
      'update',
      'updateOrCreate',
    ];

    for (const operation of functionNames) {
      try {
        await (engine as CRUDEngine)[operation]('../etc', 'primary-key', {});
        done.fail();
      } catch (error) {
        expect(error instanceof expectedError).toBe(true);
      }
    }
    done();
  });
});

describe('init', () => {
  it('resolves with the directory to which the records will be saved.', async () => {
    const options = {
      fileExtension: '.json',
    };
    engine = new FileEngine(BASE_DIRECTORY);
    const directory = await engine.init(STORE_NAME, options);
    const fileStatus = fs.statSync(directory);
    expect(fileStatus.isDirectory()).toBe(true);
  });
});

describe('append', () => {
  Object.entries(appendSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});

describe('create', () => {
  describe('create', () => {
    Object.entries(createSpec).map(([description, testFunction]) => {
      it(description, done => testFunction(done, engine));
    });
  });

  it('accepts custom file extensions.', async done => {
    const options = {
      fileExtension: '.json',
    };
    engine = new FileEngine(BASE_DIRECTORY);
    await engine.init(STORE_NAME, options);

    expect(engine.options.fileExtension).toBe(options.fileExtension);
    done();
  });
});

describe('delete', () => {
  Object.entries(deleteSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});

describe('deleteAll', () => {
  Object.entries(deleteAllSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});

describe('purge', () => {
  Object.entries(purgeSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine, initEngine));
  });
});

describe('readAllPrimaryKeys', () => {
  Object.entries(readAllPrimaryKeysSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});

describe('readAll', () => {
  Object.entries(readAllSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});

describe('read', () => {
  Object.entries(readSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});

describe('updateOrCreate', () => {
  Object.entries(updateOrCreateSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});

describe('update', () => {
  Object.entries(updateSpec).map(([description, testFunction]) => {
    it(description, done => testFunction(done, engine));
  });
});
