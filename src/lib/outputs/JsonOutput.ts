import type { ConverterOptions, Obj } from '@lib/types'
import { sortByKeys } from '@lib/utilities/String'

/**
 * The default options used to format JSON strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  sortKeys: true,
  space: '  ',
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'json'

/**
 * Formats the given JSON string, using the given formatting options.
 *
 * @param input   - The string to format.
 * @param options - JSON formatting options defined by JSON.stringify.
 *
 * @returns the formatted JSON string.
 */
export const output = (input: Obj, options: ConverterOptions = {}): string => {
  const { sortKeys, space } = { ...defaultOptions, ...options }
  let processed = input

  if (sortKeys) {
    processed = sortByKeys(input)
  }

  return JSON.stringify(processed, undefined, space as string)
}
