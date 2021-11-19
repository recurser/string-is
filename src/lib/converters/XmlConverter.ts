import { output as htmlOutput } from '@lib/outputs/HtmlOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'xml'

export const outputId = 'html'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return htmlOutput(input, options)
}
