import { isEmpty } from 'lodash'

import { Converter, Base64Encoder } from '@lib/converters'
import { confidence as base64DecodeConfidence } from '@lib/identities/Base64DecodeIdentity'

export const id = 'base64Encode'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (base64DecodeConfidence(input) > 0) {
    // If the string is already Base64-encoded, we probably don't want to do it again.
    return 0
  }

  const encoded = Base64Encoder.operation(input)

  if (encoded !== input) {
    return 1
  }

  return 0
}

export const converters = [Base64Encoder] as Converter[]
