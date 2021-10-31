import { load } from 'js-yaml'
import { isEmpty } from 'lodash'

import { Converter, YamlConverter, YamlToJsonConverter } from '@lib/converters'

export const id = 'yaml'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  try {
    const doc = load(input)
    if (typeof doc === 'string') {
      return 0
    }
  } catch (_err) {
    return 0
  }

  return 100
}

export const converters = [YamlConverter, YamlToJsonConverter] as Converter[]
