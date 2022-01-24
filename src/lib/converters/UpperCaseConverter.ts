import { ConverterOptions } from '@lib/types'
import { output as upperCaseOutput } from '@lib/outputs/UpperCaseOutput'

export const id = 'upperCase'

export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return upperCaseOutput(input, options)
}
