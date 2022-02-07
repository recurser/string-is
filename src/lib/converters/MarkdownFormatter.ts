import { ConverterOptions } from '@lib/types'
import { output as markdownOutput } from '@lib/outputs/MarkdownOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'markdown'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'markdown'

/**
 * An operation that formats the given Markdown string.
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
  return markdownOutput(input, options)
}
