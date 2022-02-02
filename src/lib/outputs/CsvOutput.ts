import { unparse } from 'papaparse'

import { ConverterOptions, Obj } from '@lib/types'

/**
 * The default options used to format CSV strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  header: true,
  quotes: true,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'csv'

/**
 * Converts the given object to a CSV string.
 *
 * @param input   - The object to convert to a CSV.
 * @param options - A subset of CSV formatting options defined by papaparse.
 *
 * @returns the formatted CSV string.
 */
export const output = (input: Obj, options: ConverterOptions): string => {
  // papaparse expects an array of objects.
  let array = input
  if (!Array.isArray(array)) {
    array = [array]
  }

  return unparse(array, options)
}
