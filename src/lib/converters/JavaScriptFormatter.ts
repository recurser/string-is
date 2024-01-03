import type { ConverterOptions } from '@lib/types'
import { output as javaScriptOutput } from '@lib/outputs/JavaScriptOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'javaScriptFormatter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'javaScript'

/**
 * An operation that formats the given JavaScript input string.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = async (
  input: string,
  options: ConverterOptions = {},
): Promise<string> => {
  return javaScriptOutput(input, options)
}
