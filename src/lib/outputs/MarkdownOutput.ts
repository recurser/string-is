import * as markdown from 'prettier/plugins/markdown'
import { format } from 'prettier/standalone'

import type { ConverterOptions } from '@lib/types'

/**
 * The default options used to format Markdown strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  tabWidth: 2,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'markdown'

/**
 * Formats the given Markdown string, using the given formatting options.
 *
 * @param input   - The string to format.
 * @param options - A subset of Markdown formatting options defined by prettier.
 *
 * @returns the formatted Markdown string.
 */
export const output = async (
  input: string,
  options: ConverterOptions = {},
): Promise<string> => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'markdown',
    plugins: [markdown],
  })
}
