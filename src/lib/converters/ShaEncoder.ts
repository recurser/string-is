import { ConverterOptions } from '@lib/types'
import { isEmpty } from 'lodash'
import { output as shaOutput } from '@lib/outputs/ShaOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'shaEncoder'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'sha'

/**
 * An operation that generates an SHA hash for the given input string.
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
  if (isEmpty(input)) {
    return ''
  }

  return shaOutput(input, options)
}
