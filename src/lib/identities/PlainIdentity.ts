import { isEmpty } from 'lodash'

import {
  Converter,
  Md5Encoder,
  RipemdEncoder,
  ShaEncoder,
} from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'plain'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is representable as a plain
 * string. This is the lowest-common-denominator, used to determine
 * if we can do basic operations like creating hashes.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  return 1
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [Md5Encoder, RipemdEncoder, ShaEncoder] as Converter[]
