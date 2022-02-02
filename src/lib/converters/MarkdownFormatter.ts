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

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return markdownOutput(input, options)
}
