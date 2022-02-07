import { ConverterOptions } from '@lib/types'
import { output as uuidOutput } from '@lib/outputs/UuidOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'uuid'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'uuid'

/**
 * An operation that generates a UUID.
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
  return uuidOutput(input, options)
}
