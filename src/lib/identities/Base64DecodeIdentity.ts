import { isEmpty } from 'lodash'
import { isValid } from 'js-base64'

import { Base64Decoder, Converter } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'base64Decode'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is base64-encoded.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (!isValid(input)) {
    return 0
  }

  // If the output is the same as the input, there is no
  //  reason to decode it, even if it is encoded.
  const output = Base64Decoder.operation(input)
  if (output === input) {
    return 0
  }

  // Character code 65533 is the 'invalid sequence' character.
  const charcodes = output.split('').map((char) => char.charCodeAt(0))
  if (charcodes.includes(65533)) {
    return 0
  }

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [Base64Decoder] as Converter[]
