import { isEmpty } from 'lodash'

import {
  Converter,
  Md5Encoder,
  RipemdEncoder,
  ShaEncoder,
} from '@lib/converters'

export const id = 'plain'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  return 1
}

export const converters = [Md5Encoder, RipemdEncoder, ShaEncoder] as Converter[]
