import { output as upperCaseOutput } from '@lib/outputs/UpperCaseOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'upperCase'

export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return upperCaseOutput(input, options)
}
