import { isEmpty } from 'lodash'

import { Converter, UrlEncoder } from '@lib/converters'
import { confidence as urlDecodeConfidence } from '@lib/identities/UrlDecodeIdentity'

export const id = 'urlEncode'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (urlDecodeConfidence(input) > 0) {
    // If the string is already URL-encoded, we probably don't want to do it again.
    return 0
  }

  const encoded = UrlEncoder.operation(input)

  if (encoded !== input) {
    return 1
  }

  return 0
}

export const converters = [UrlEncoder] as Converter[]
