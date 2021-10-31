import { unparse } from 'papaparse'

import { Obj } from '@lib/types'

export const id = 'csv'

export const output = (input: Obj): string => {
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
