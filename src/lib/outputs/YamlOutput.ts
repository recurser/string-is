import { dump } from 'js-yaml'

import type { ConverterOptions, Obj } from '@lib/types'
import { sortByKeys } from '@lib/utilities/String'

/**
 * The default options used to format YAML strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  forceQuotes: true,
  indent: 2,
  sortKeys: false,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'yaml'

/**
 * Converts the given object to a YAML string.
 *
 * @param input   - The object to convert to YAML.
 * @param options - A subset of YAML formatting options defined by js-yaml.
 *
 * @returns the formatted YAML string.
 */
export const output = (input: Obj, options: ConverterOptions = {}): string => {
  const { sortKeys, ...merged } = { ...defaultOptions, ...options }
  let processed = input

  if (sortKeys) {
    processed = sortByKeys(input)
  }

  // See https://github.com/nodeca/js-yaml/issues/376
  return `---\n${dump(processed, merged)}`
}
