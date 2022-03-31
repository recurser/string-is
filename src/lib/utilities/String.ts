import { camelCase, fromPairs, isArray, isObject, kebabCase, map } from 'lodash'

import type { Obj } from '@lib/types'

/**
 * Converts a hyphenated converter slug to a camel-cased ID identifying
 * the converter module.
 *
 * @param converterSlug - The hyphenated slug to camel-case.
 *
 * @returns the camel-cased slug.
 */
export const camelCaseConverterSlug = (converterSlug: string): string => {
  // Hyphenated 'JavaScript' is more readable as 'javascript' in URLs.
  const adjusted = converterSlug.replace('javascript', 'java-script')
  return camelCase(adjusted)
}

/**
 * Converts a camel-cased converter ID to a hyphenated slug suitable
 * for use in the converter URL.
 *
 * @param converterId - The camel-cased ID to hyphenate.
 *
 * @returns the hyphenated slug.
 */
export const hyphenateConverterId = (converterId: string): string => {
  // Hyphenated 'JavaScript' is more readable as 'javascript' in URLs.
  let adjusted = converterId.replace('avaScript', 'avascript')
  adjusted = kebabCase(adjusted)
  // Remove the hyphen from numeric values like 'base-64' and 'md-5'.
  adjusted = adjusted.replace(/\-(\d)/, '$1')
  return adjusted
}

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
