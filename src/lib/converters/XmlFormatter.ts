import type { ConverterOptions } from '@lib/types'
import { output as htmlOutput } from '@lib/outputs/HtmlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'xmlFormatter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'html'

/**
 * An operation that formats the given XML input string.
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
  return htmlOutput(input, options)
}
