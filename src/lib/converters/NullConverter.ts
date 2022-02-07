import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'null'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

/**
 * This converter is used in the case when no converter has been
 * chosen. It simply return an empty string.
 *
 * @param _input   - the string to convert.
 * @param _options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  _input: string,
  _options: ConverterOptions = {},
): string => {
  return ''
}
