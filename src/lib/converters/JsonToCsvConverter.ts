import { isObject } from 'lodash'

import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as csvOutput } from '@lib/outputs/CsvOutput'

export const id = 'jsonToCsv'

export const output = 'csv'

export const operation = (data: string): string => {
  let obj = jsonInput(data)
  if (!obj) {
    return ''
  }

  // papaparse doesn't work for arrays of primitives - it expects column names (ie key → value objects).
  if (Array.isArray(obj)) {
    obj = obj.map((entry) => {
      if (isObject(entry)) {
        return entry
      }

      return { 'field 1': entry }
    })
  }

  return csvOutput(obj)
}

// Some strings (eg. '[1, 2, 3]') get returned as valid YAML. If something
// can be parsed as JSON, it is extremely unlikely to also be YAML - the
// JSON parsing is more likely to be correct.
export const overrides = ['yaml', 'yamlToJson']
