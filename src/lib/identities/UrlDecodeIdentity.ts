import { isEmpty } from 'lodash'

import { Converter, UrlDecoder } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'urlDecode'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is URL-encoded.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
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

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [UrlDecoder] as Converter[]
