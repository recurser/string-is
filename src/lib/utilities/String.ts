import { fromPairs, isArray, isObject, map } from 'lodash'

import { Obj } from '@lib/types'

/**
 * Sorts the given object by it's keys, recursively.
 *
 * @param object - The object whose keys we will sort.
 *
 * @returns the object with sorted keys.
 */
export const sortByKeys = (object: Obj): Obj => {
  if (isArray(object)) {
    return object
      .map((entry) => {
        if (isObject(entry)) {
          return sortByKeys(entry as Obj)
        }

        return entry
      })
      .sort((a: unknown, b: unknown) =>
        JSON.stringify(a).localeCompare(JSON.stringify(b)),
      )
  }

  const sortedKeys = Object.keys(object).sort() as string[]

  return fromPairs(
    map(sortedKeys, (key) => {
      let value = object[key]
      if (isObject(object[key])) {
        value = sortByKeys(value as Obj)
      }

      return [key, value]
    }),
  )
}

/**
 * Strips tags from a string, returning plain text. Useful for turning
 * converter page intros into meta descriptions.
 *
 * @param str - The string to remove tags from.
 */
export const removeTags = (str: string) => str.replace(/(<([^>]+)>)/gi, '')
