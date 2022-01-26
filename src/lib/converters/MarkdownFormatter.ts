import { ConverterOptions } from '@lib/types'
import { output as markdownOutput } from '@lib/outputs/MarkdownOutput'

export const id = 'markdown'

export const outputId = 'markdown'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return markdownOutput(input, options)
}
