import { unparse } from 'papaparse'

export const id = 'csv'

export type CsvInput = Record<string, unknown> | Record<string, unknown>[]

export const output = (input: CsvInput): string => {
  // papaparse expects an array of objects.
  let array = input
  if (!Array.isArray(array)) {
    array = [array]
  }

  try {
    return unparse(array)
  } catch (err) {
    return ''
  }
}
