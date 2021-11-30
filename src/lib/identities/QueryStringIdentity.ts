import { isEmpty } from 'lodash'

import {
  Converter,
  QueryStringToJsonConverter,
  QueryStringToYamlConverter,
} from '@lib/converters'
import { input } from '@lib/inputs/QueryStringInput'

export const id = 'queryString'

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

export const converters = [
  QueryStringToJsonConverter,
  QueryStringToYamlConverter,
] as Converter[]
