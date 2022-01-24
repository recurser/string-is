import { isEmpty } from 'lodash'

import { Converter, JsonFormatter, JsonToYamlConverter } from '@lib/converters'
import { input as jsonInput } from '@lib/inputs/JsonInput'

export const id = 'jsonObject'

export const confidence = (input: string) => {
  // Our parser is quite lenient, and thinks URLs are JSON because of the : in
  // https: - we do a basic sanity check to make sure we have a JSON object.
  if (input.trim()[0] !== '{') {
    return 0
  }

  const obj = jsonInput(input)
  if (!obj) {
    return 0
  } else if (isEmpty(obj)) {
    // There's not much value in beautifying an empty object.
    return 0
  }

  const type = Object.prototype.toString.call(obj)
  return type === '[object Object]' ? 100 : 0
}

export const converters = [JsonFormatter, JsonToYamlConverter] as Converter[]
