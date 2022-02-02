import { ConverterOptions } from '@lib/types'
import { output as lowerCaseOutput } from '@lib/outputs/LowerCaseOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'lowerCase'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return lowerCaseOutput(input, options)
}
