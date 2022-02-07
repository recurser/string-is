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

/**
 * An operation that converts the given input string to lower case.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return lowerCaseOutput(input, options)
}
