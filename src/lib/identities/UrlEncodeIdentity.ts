import { isEmpty } from 'lodash'

import { Converter, UrlEncoder } from '@lib/converters'
import { confidence as urlDecodeConfidence } from '@lib/identities/UrlDecodeIdentity'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'urlEncode'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is URL-encodable.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
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

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [UrlEncoder] as Converter[]
