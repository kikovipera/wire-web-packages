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

import {MutedStatus, ServiceRef} from '../conversation/';

interface Member {
  hidden_ref?: string;
  hidden?: boolean;
  id: string;
  otr_archived_ref?: string;
  otr_archived?: boolean;
  otr_muted_ref?: string | null;
  otr_muted?: boolean | null;
  otr_muted_status?: MutedStatus | null;
  service?: ServiceRef;
}

export {Member};
