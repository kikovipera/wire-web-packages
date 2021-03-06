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

import {RegisteredClient} from '@wireapp/api-client/dist/commonjs/client/';
import {CRUDEngine} from '@wireapp/store-engine';
import {CryptographyService} from '../cryptography/';
import {MetaClient} from './ClientService';

export enum DatabaseStores {
  CLIENTS = 'clients',
}

class ClientDatabaseRepository {
  public static readonly STORES = DatabaseStores;

  public static KEYS = {
    LOCAL_IDENTITY: 'local_identity',
  };

  constructor(private readonly storeEngine: CRUDEngine) {}

  public getLocalClient(): Promise<MetaClient> {
    return this.getClient(ClientDatabaseRepository.KEYS.LOCAL_IDENTITY);
  }

  public getClient(sessionId: string): Promise<MetaClient> {
    return this.storeEngine.read<MetaClient>(ClientDatabaseRepository.STORES.CLIENTS, sessionId);
  }

  public deleteLocalClient(): Promise<string> {
    return this.storeEngine.delete(
      ClientDatabaseRepository.STORES.CLIENTS,
      ClientDatabaseRepository.KEYS.LOCAL_IDENTITY
    );
  }

  public deleteClient(sessionId: string): Promise<string> {
    return this.storeEngine.delete(ClientDatabaseRepository.STORES.CLIENTS, sessionId);
  }

  public createClientList(userId: string, clientList: RegisteredClient[]): Promise<MetaClient[]> {
    const createClientTasks: Promise<MetaClient>[] = [];
    for (const client of clientList) {
      createClientTasks.push(this.createClient(userId, client));
    }
    return Promise.all(createClientTasks);
  }

  public createLocalClient(client: RegisteredClient): Promise<MetaClient> {
    const transformedClient = this.transformLocalClient(client);
    return this.storeEngine
      .create(ClientDatabaseRepository.STORES.CLIENTS, ClientDatabaseRepository.KEYS.LOCAL_IDENTITY, transformedClient)
      .then(() => transformedClient);
  }

  public updateLocalClient(client: RegisteredClient): Promise<MetaClient> {
    const transformedClient = this.transformLocalClient(client);
    return this.storeEngine
      .update(ClientDatabaseRepository.STORES.CLIENTS, ClientDatabaseRepository.KEYS.LOCAL_IDENTITY, transformedClient)
      .then(() => transformedClient);
  }

  public updateClient(userId: string, client: RegisteredClient): Promise<MetaClient> {
    const transformedClient = this.transformClient(userId, client);
    return this.storeEngine
      .update(
        ClientDatabaseRepository.STORES.CLIENTS,
        CryptographyService.constructSessionId(userId, client.id),
        transformedClient
      )
      .then(() => transformedClient);
  }

  public createClient(userId: string, client: RegisteredClient): Promise<MetaClient> {
    const transformedClient = this.transformClient(userId, client);
    return this.storeEngine
      .create(
        ClientDatabaseRepository.STORES.CLIENTS,
        CryptographyService.constructSessionId(userId, client.id),
        transformedClient
      )
      .then(() => transformedClient);
  }

  private transformClient(userId: string, client: RegisteredClient, verified: boolean = false): MetaClient {
    return {
      ...client,
      meta: {primary_key: CryptographyService.constructSessionId(userId, client.id), is_verified: verified},
    };
  }

  private transformLocalClient(client: RegisteredClient, verified: boolean = true): MetaClient {
    return {
      ...client,
      meta: {primary_key: ClientDatabaseRepository.KEYS.LOCAL_IDENTITY, is_verified: verified},
    };
  }
}

export default ClientDatabaseRepository;
