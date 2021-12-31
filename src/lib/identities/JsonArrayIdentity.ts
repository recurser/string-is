import { isEmpty } from 'lodash'

import { JsonFormatter, JsonToYamlConverter, Converter } from '@lib/converters'
import { input as jsonInput } from '@lib/inputs/JsonInput'

export const id = 'jsonArray'

export const confidence = (input: string) => {
  // Our parser is quite lenient, and thinks URLs are JSON because of the : in
  // https: - we do a basic sanity check to make sure we have an array.
  if (input.trim()[0] !== '[') {
    return 0
  }

  const obj = jsonInput(input)
  if (!obj) {
    return 0
  } else if (isEmpty(obj)) {
    // There's not much value in beautifying an empty array.
    return 0
  }

  const type = Object.prototype.toString.call(obj)
  return type === '[object Array]' ? 100 : 0
}

export const converters = [JsonFormatter, JsonToYamlConverter] as Converter[]
