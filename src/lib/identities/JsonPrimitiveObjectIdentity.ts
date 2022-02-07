import { isEqual, isObject, uniq } from 'lodash'

import {
  Converter,
  JsonFormatter,
  JsonToCsvConverter,
  JsonToYamlConverter,
} from '@lib/converters'
import { input as jsonInput } from '@lib/inputs/JsonInput'
import { confidence as objectConfidence } from '@lib/identities/JsonObjectIdentity'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'jsonPrimitiveObject'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is a JSON object containing
 * only JavaScript primitives (ie. does not contain complex,
 * deeply-nested objects).
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (input: string) => {
  if (objectConfidence(input) === 0) {
    return 0
  }

  // If we get this far, we know we have a non-empty object.
  // We need to figure out if the values are primitives.
  const obj = jsonInput(input)
  const hasPrimitives = uniq(
    (Object.keys(obj || {}) as Array<unknown>).map((entry) => !isObject(entry)),
  )

  return isEqual(hasPrimitives, [true]) ? 100 : 0
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [
  JsonFormatter,
  JsonToCsvConverter,
  JsonToYamlConverter,
] as Converter[]
