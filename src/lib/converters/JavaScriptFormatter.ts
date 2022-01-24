import { ConverterOptions } from '@lib/types'
import { output as javaScriptOutput } from '@lib/outputs/JavaScriptOutput'

export const id = 'javaScript'

export const outputId = 'javaScript'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return javaScriptOutput(input, options)
}
