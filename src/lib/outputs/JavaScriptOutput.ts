import * as babel from 'prettier/plugins/babel'
// eslint-disable-next-line import/namespace
import * as estree from 'prettier/plugins/estree'
import { type Plugin } from 'prettier'
import { format } from 'prettier/standalone'

import type { ConverterOptions } from '@lib/types'

/**
 * The default options used to format JavaScript strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'javaScript'

/**
 * Formats the given JavaScript string, using the given formatting options.
 *
 * @param input   - The string to format.
 * @param options - A subset of JavaScript formatting options defined by prettier.
 *
 * @returns the formatted JavaScript string.
 */
export const output = async (
  input: string,
  options: ConverterOptions = {},
): Promise<string> => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'babel',
    plugins: [babel, estree as Plugin],
  })
}
