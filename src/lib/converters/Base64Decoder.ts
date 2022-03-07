import { decode, isValid } from 'js-base64'

import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'base64Decoder'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

/**
 * An operation that base64-decodes the given input string.
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
  if (!isValid(input)) {
    throw new Error('The input is not a valid Base64 string')
  }

  return decode(input)
}
