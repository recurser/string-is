import { output as markdownOutput } from '@lib/outputs/MarkdownOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'markdown'

export const outputId = 'markdown'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return markdownOutput(input, options)
}
