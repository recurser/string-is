import { isEmpty } from 'lodash'
import { parse } from 'papaparse'

import { CsvToYamlOutput, Output } from '@lib/outputs'

export const id = 'csv'

// Need to use a proper library for this, in case there are commas inside quotes.
export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (!input.includes(',')) {
    return 0
  }

  const { errors } = parse(input)
  if (errors.length > 0) {
    return 0
  }

  return 100
}

export const outputs = [CsvToYamlOutput] as Output[]
