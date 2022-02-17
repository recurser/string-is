import { ConverterOptions } from '@lib/types'
import { output as ripemdOutput } from '@lib/outputs/RipemdOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'ripemd'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

/**
 * An operation that generates a RIPEMD hash for the given input string.
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
  return ripemdOutput(input, options)
}
