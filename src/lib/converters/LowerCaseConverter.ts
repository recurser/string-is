import { ConverterOptions } from '@lib/types'
import { output as lowerCaseOutput } from '@lib/outputs/LowerCaseOutput'

export const id = 'lowerCase'

export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return lowerCaseOutput(input, options)
}
