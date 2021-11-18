import { unparse } from 'papaparse'

import { ConverterOptions, Obj } from '@lib/types'

export const defaultOptions = {
  header: true,
  quotes: true,
}

export const id = 'csv'

export const output = (input: Obj, options: ConverterOptions): string => {
  // papaparse expects an array of objects.
  let array = input
  if (!Array.isArray(array)) {
    array = [array]
  }

  try {
    return unparse(array, options)
  } catch (err) {
    return ''
  }
}
