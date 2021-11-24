import { isEmpty } from 'lodash'

import {
  Converter,
  Md5Converter,
  RipemdConverter,
  ShaConverter,
} from '@lib/converters'

export const id = 'plain'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  return 1
}

export const converters = [
  Md5Converter,
  RipemdConverter,
  ShaConverter,
] as Converter[]
