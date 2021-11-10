import { isEmpty } from 'lodash'

import {
  Base64EncodeConverter,
  Converter,
  Md5Converter,
  RipemdConverter,
  ShaConverter,
  UrlEncodeConverter,
} from '@lib/converters'

export const id = 'plain'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  return 1
}

export const converters = [
  Base64EncodeConverter,
  Md5Converter,
  RipemdConverter,
  ShaConverter,
  UrlEncodeConverter,
] as Converter[]
