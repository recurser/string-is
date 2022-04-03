import { FormatOptions, format } from 'sql-formatter'

import type { ConverterOptions } from '@lib/types'

/**
 * The default options used to format SQL strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  indent: '  ',
  language: 'sql',
  uppercase: true,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'sql'

/**
 * Formats the given SQL string, using the given formatting options.
 *
 * @param input   - The string to format.
 * @param options - A subset of SQL formatting options defined by sql-formatter.
 *
 * @returns the formatted SQL string.
 */
export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
  } as FormatOptions)
}
