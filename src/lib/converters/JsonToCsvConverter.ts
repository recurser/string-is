import { isObject } from 'lodash'

import { ConverterOptions } from '@lib/types'
import { output as csvOutput } from '@lib/outputs/CsvOutput'
import { input as jsonInput } from '@lib/inputs/JsonInput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'jsonToCsv'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'csv'

/**
 * An operation that formats the given JSON input string as a CSV.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  let obj = jsonInput(input)
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

  return csvOutput(obj, options)
}
