import { decode, isValid } from 'js-base64'

import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'base64Decode'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  if (!isValid(input)) {
    throw new Error('The input is not a valid Base64 string')
  }

  return decode(input)
}
