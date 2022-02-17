import { isEmpty } from 'lodash'

import {
  Converter,
  CsvFormatter,
  CsvToJsonConverter,
  CsvToYamlConverter,
} from '@lib/converters'
import { input as JsonInput } from '@lib/inputs/JsonInput'
import { input } from '@lib/inputs/CsvInput'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'csv'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is a CSV.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
export const confidence = (data: string) => {
  if (isEmpty(data)) {
    return 0
  } else if (!data.includes(',')) {
    return 0
  }

  // Some JSON (such as "{ a: 2, b: 2 }" is also a valid CSV. If
  // a string can be parsed as JSON, it is unlikely to be a CSV.
  try {
    const json = JsonInput(data)
    if (json) {
      return 0
    }
  } catch (_err) {}

  const obj = input(data)
  if (!obj) {
    return 0
  }

  return 100
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [
  CsvFormatter,
  CsvToJsonConverter,
  CsvToYamlConverter,
] as Converter[]
