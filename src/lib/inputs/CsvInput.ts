import { parse as jsonParse } from 'hjson'
import { isEmpty } from 'lodash'
import { parse as csvParse } from 'papaparse'

import { CsvToYamlConverter, Converter } from '@lib/converters'

export const id = 'csv'

// Need to use a proper library for this, in case there are commas inside quotes.
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (!input.includes(',')) {
    return 0
  }

  // Some JSON (such as "{ a: 2, b: 2 }" is also a valid CSV. If
  // a string can be parsed as JSON, it is unlikely to be a CSV.
  try {
    jsonParse(input)
    return 0
  } catch (err) {
    // Real CSVs should trigger an error.
  }

  const { errors } = csvParse(input)
  if (errors.length > 0) {
    return 0
  }

  return 100
}

export const converters = [CsvToYamlConverter] as Converter[]
