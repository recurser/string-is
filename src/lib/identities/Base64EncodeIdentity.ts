import { isEmpty } from 'lodash'

import { Base64Encoder, Converter } from '@lib/converters'
import { confidence as base64DecodeConfidence } from '@lib/identities/Base64DecodeIdentity'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'base64Encode'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is base64-encodable.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
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

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [Base64Encoder] as Converter[]
