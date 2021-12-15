import { output as javascriptOutput } from '@lib/outputs/JavascriptOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'javascript'

export const outputId = 'javascript'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return javascriptOutput(input, options)
}
