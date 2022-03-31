import { format } from 'prettier/standalone'
import parserPostcss from 'prettier/parser-postcss'

import type { ConverterOptions } from '@lib/types'

/**
 * The default options used to format CSS strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'css'

/**
 * Formats the given CSS string, using the given formatting options.
 *
 * @param input   - The string to format.
 * @param options - A subset of CSS formatting options defined by prettier.
 *
 * @returns the formatted CSS string.
 */
export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'scss',
    plugins: [parserPostcss],
  })
}
