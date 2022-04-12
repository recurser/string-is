import stringify from '@iarna/toml/stringify'

import type { ConverterOptions, Obj } from '@lib/types'
import { sortByKeys } from '@lib/utilities/String'

/**
 * The default options used to format TOML strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  sortKeys: false,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'toml'

/**
 * Converts the given object to a TOML string.
 *
 * @param input   - The object to convert to TOML.
 * @param options - A subset of TOML formatting options defined by iarna/toml.
 *
 * @returns the formatted TOML string.
 */
export const output = (input: Obj, options: ConverterOptions = {}): string => {
  const { sortKeys } = { ...defaultOptions, ...options }
  let processed = input

  if (sortKeys) {
    processed = sortByKeys(input)
  }

  return stringify(processed)
}
