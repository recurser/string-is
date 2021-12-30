import { decode, isValid } from 'js-base64'

import { ConverterOptions } from '@lib/types'

export const id = 'base64Decode'

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
