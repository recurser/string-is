import { isEqual, isObject, uniq } from 'lodash'

import {
  JsonFormatter,
  JsonToCsvConverter,
  JsonToYamlConverter,
  Converter,
} from '@lib/converters'
import { confidence as arrayConfidence } from '@lib/identities/JsonArrayIdentity'
import { input as jsonInput } from '@lib/inputs/JsonInput'

export const id = 'jsonPrimitiveArray'

export const confidence = (input: string) => {
  if (arrayConfidence(input) === 0) {
    return 0
  }

  // If we get this far, we know we have a non-empty array.
  // We need to figure out if the elements are primitives.
  const obj = jsonInput(input)
  const hasPrimitives = uniq(
    ((obj || []) as Array<unknown>).map((entry) => !isObject(entry)),
  )

  return isEqual(hasPrimitives, [true]) ? 100 : 0
}

export const converters = [
  JsonFormatter,
  JsonToCsvConverter,
  JsonToYamlConverter,
] as Converter[]
