import type { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'urlDecoder'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

/**
 * An operation that URL-decodes the given input string.
 *
 * @param input    - the string to convert.
 * @param _options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return decodeURIComponent(input)
}
