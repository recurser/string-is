import { isEmpty } from 'lodash'

import {
  CsvToJsonConverter,
  CsvToYamlConverter,
  Converter,
} from '@lib/converters'
import { input } from '@lib/inputs/CsvInput'
import { input as JsonInput } from '@lib/inputs/JsonInput'

export const id = 'csv'

export const confidence = (data: string) => {
  if (isEmpty(data)) {
    return 0
  } else if (!data.includes(',')) {
    return 0
  }

  // Some JSON (such as "{ a: 2, b: 2 }" is also a valid CSV. If
  // a string can be parsed as JSON, it is unlikely to be a CSV.
  const json = JsonInput(data)
  if (json) {
    return 0
  }

  const obj = input(data)
  if (!obj) {
    return 0
  }

  return 100
}

export const converters = [
  CsvToJsonConverter,
  CsvToYamlConverter,
] as Converter[]
