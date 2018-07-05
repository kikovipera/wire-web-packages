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

import {ImageContent} from '../../conversation/root';
import {EncryptedAsset} from '../../cryptography/root';

interface RemoteData {
  assetId: string;
  otrKey: Uint8Array | Buffer;
  sha256: Uint8Array | Buffer;
  assetToken?: string;
}

interface Original {
  mimeType: string;
  size: number;
  image?: {
    height: number;
    width: number;
  };
}

interface AssetContent {
  uploaded: RemoteData;
  original: Original;
}

interface ImageAssetContent {
  asset: EncryptedAsset & {key: string; token: string};
  image: ImageContent;
}

export {AssetContent, ImageAssetContent, Original, RemoteData};