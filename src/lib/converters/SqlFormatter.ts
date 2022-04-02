import { FormatOptions, format } from 'sql-formatter'

import type { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'sqlFormatter'

/**
 * The default options used to format SQL strings,
 * if no user-defined options were provided.
 */
const defaultOptions = {
  indent: '  ',
  language: 'sql',
  uppercase: true,
}

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'sql'

/**
 * An operation that formats the given SQL input string.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
  } as FormatOptions)
}
