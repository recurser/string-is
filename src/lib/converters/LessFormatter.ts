import type { ConverterOptions } from '@lib/types'
import { output as lessOutput } from '@lib/outputs/LessOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'lessFormatter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'css'

/**
 * An operation that formats the given LESS input string.
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
  return lessOutput(input, options)
}
