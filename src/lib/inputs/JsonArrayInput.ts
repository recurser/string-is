import { parse } from 'hjson'
import { isEmpty } from 'lodash'

import {
  JsonConverter,
  JsonToCsvConverter,
  JsonToYamlConverter,
  Converter,
} from '@lib/converters'

export const id = 'jsonArray'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (/^\s*\[\s*\]\s*$/.test(input)) {
    // There's not much value in beautifying an empty object.
    return 0
  }

  let obj

  try {
    obj = parse(input)
  } catch (err) {
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
