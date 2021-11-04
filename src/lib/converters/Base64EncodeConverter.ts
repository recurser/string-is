import { encode } from 'js-base64'

import { ConverterOptions } from '@lib/types'

export const id = 'base64Encode'

export const outputId = 'plain'

export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return encode(input)
}

export const overrides = ['base64Decode']
