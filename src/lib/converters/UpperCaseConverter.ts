import { ConverterOptions } from '@lib/types'
import { output as upperCaseOutput } from '@lib/outputs/UpperCaseOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'upperCase'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return upperCaseOutput(input, options)
}
