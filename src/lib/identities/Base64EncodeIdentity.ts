import { isEmpty } from 'lodash'

import { Converter, Base64EncodeConverter } from '@lib/converters'
import { confidence as base64DecodeConfidence } from '@lib/identities/Base64DecodeIdentity'

export const id = 'base64Encode'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (base64DecodeConfidence(input) > 0) {
    // If the string is already Base64-encoded, we probably don't want to do it again.
    return 0
  }

  let encoded
  try {
    encoded = Base64EncodeConverter.operation(input)
  } catch {
    return 0
  }

  if (encoded !== input) {
    return 1
  }

  return 0
}

export const converters = [Base64EncodeConverter] as Converter[]
