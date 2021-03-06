/*
 * Wire
 * Copyright (C) 2019 Wire Swiss GmbH
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

/**
 * Makes all properties of a type recursively optional
 * @see https://stackoverflow.com/questions/41980195/recursive-partialt-in-typescript-2-1
 * @since TypeScript 2.8
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P]
};

/**
 * Creates a type from a given interface but excludes the selected keys
 * ```
 * interface AB {a: string, b: string};
 * type ABwithoutA = Omit<AB, "a">;
 * ```
 * @see https://stackoverflow.com/questions/48215950/exclude-property-from-type
 * @since TypeScript 2.8
 */
export type Omit<T, U> = Pick<T, Exclude<keyof T, U>>;
