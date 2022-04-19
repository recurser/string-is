import type { ConverterOptions } from '@lib/types'
import { output as diffOutput } from '@lib/outputs/DiffOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'diffCompare'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'diff'

/**
 * An operation that allows generation of the diff string.
 *
 * @param input    - the string to convert.
 * @param _options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return diffOutput(input, options)
}
