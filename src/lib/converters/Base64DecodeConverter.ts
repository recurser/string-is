import { decode } from 'js-base64'

import { ConverterOptions } from '@lib/types'

export const id = 'base64Decode'

export const outputId = 'plain'

export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return decode(input)
}

export const overrides = ['base64Encode']
