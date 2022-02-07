import { isEmpty } from 'lodash'

import {
  Converter,
  QueryStringToJsonConverter,
  QueryStringToYamlConverter,
} from '@lib/converters'
import { input } from '@lib/inputs/QueryStringInput'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'queryString'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is an encoded query string.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (data: string) => {
  if (isEmpty(data)) {
    return 0
  }

  const obj = input(data)
  if (!obj) {
    return 0
  }

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [
  QueryStringToJsonConverter,
  QueryStringToYamlConverter,
] as Converter[]
