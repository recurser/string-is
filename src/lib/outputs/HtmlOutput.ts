import * as html from 'prettier/plugins/html'
import { format } from 'prettier/standalone'

import type { ConverterOptions } from '@lib/types'

/**
 * The default options used to format HTML strings,
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
export const id = 'html'

/**
 * Formats the given HTML string, using the given formatting options.
 *
 * @param input   - The string to format.
 * @param options - A subset of HTML formatting options defined by prettier.
 *
 * @returns the formatted HTML string.
 */
export const output = async (
  input: string,
  options: ConverterOptions = {},
): Promise<string> => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'html',
    plugins: [html],
  })
}
