import { isEmpty } from 'lodash'

import {
  JsonConverter,
  JsonToCsvConverter,
  JsonToYamlConverter,
  Converter,
} from '@lib/converters'
import { input as jsonInput } from '@lib/inputs/JsonInput'

export const id = 'jsonArray'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (/^\s*\[\s*\]\s*$/.test(input)) {
    // There's not much value in beautifying an empty object.
    return 0
  }

  const obj = jsonInput(input)
  if (!obj) {
    return 0
  }

  const type = Object.prototype.toString.call(obj)
  return type === '[object Array]' ? 100 : 0
}

export const converters = [
  JsonConverter,
  JsonToCsvConverter,
  JsonToYamlConverter,
] as Converter[]
