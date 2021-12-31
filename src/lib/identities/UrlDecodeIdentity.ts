import { isEmpty } from 'lodash'

import { Converter, UrlDecoder } from '@lib/converters'

export const id = 'urlDecode'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  const decoded = UrlDecoder.operation(input)

  // See https://stackoverflow.com/a/2295286
  if (decoded !== input) {
    return 100
  }

  return 0
}

export const converters = [UrlDecoder] as Converter[]
