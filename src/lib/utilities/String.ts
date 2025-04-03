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
 * Sorts the keys of an object recursively, preserving array order.
 * 
 * @param obj - The object to sort
 * @returns A new object with sorted keys
 */
const sortObjectKeys = (obj: Record<string, unknown>): Record<string, unknown> => {
  const sortedKeys = Object.keys(obj).sort()
  return fromPairs(
    map(sortedKeys, (key: string) => {
      const value = obj[key]
      if (isObject(value) && !isArray(value)) {
        return [key, sortObjectKeys(value as Record<string, unknown>)]
      }
      return [key, value]
    }),
  )
}

/**
 * Sorts the keys of an object or array recursively.
 * For arrays, only sorts keys within array elements, preserving array order.
 * For objects, sorts all keys recursively.
 *
 * @param object - The object whose keys we will sort.
 * @returns the object with sorted keys.
 */
export const sortByKeys = (object: Obj): Obj => {
  if (object === null || typeof object !== 'object') {
    return object
  }

  if (isArray(object)) {
    return (object as unknown[]).map((entry: unknown) => {
      if (isObject(entry) && !isArray(entry)) {
        return sortObjectKeys(entry as Record<string, unknown>)
      }
      return entry
    })
  }

  return sortObjectKeys(object as Record<string, unknown>)
}

/**
 * Strips tags from a string, returning plain text. Useful for turning
 * converter page intros into meta descriptions.
 *
 * @param str - The string to remove tags from.
 */
export const removeTags = (str: string) => str.replace(/(<([^>]+)>)/gi, '')
