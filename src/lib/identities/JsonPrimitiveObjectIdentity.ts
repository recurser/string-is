import { isEqual, isObject, uniq } from 'lodash'

import {
  JsonFormatter,
  JsonToCsvConverter,
  JsonToYamlConverter,
  Converter,
} from '@lib/converters'
import { confidence as objectConfidence } from '@lib/identities/JsonObjectIdentity'
import { input as jsonInput } from '@lib/inputs/JsonInput'

export const id = 'jsonPrimitiveObject'

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

export const converters = [
  JsonFormatter,
  JsonToCsvConverter,
  JsonToYamlConverter,
] as Converter[]
