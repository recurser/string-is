import { minify } from 'terser'

import type { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'javaScriptMinifier'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

/**
 * An operation that minifies the given JavaScript input string.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = async (
  input: string,
  _options: ConverterOptions = {},
): Promise<string> => {
  if (!input) {
    return ''
  }

  const { code } = await minify(input)

  return code as string
}
