import { isEmpty } from 'lodash'

import type { ConverterOptions } from '@lib/types'

/**
 * The default options used to format numbers
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  fromRadix: 10,
  toRadix: 16,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'numberBase'

/**
 * We support the same maximum radix as Number.toString()
 */
export const maxRadix = 36

/**
 * We support the same minimum radix as Number.toString()
 */
export const minRadix = 2

/**
 * Converts the given numeric string to the given base.
 *
 * @param input   - The numeric string to format.
 * @param options - Contains the to and from radices used for base conversion.
 *
 * @returns the numeric string in the requeated base.
 */
export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const { fromRadix, toRadix } = { ...defaultOptions, ...options }
  const result = parseInt(input, fromRadix).toString(toRadix).toUpperCase()

  if (result === 'NAN') {
    return ''
  }

  return result
}

/**
 * Returns a list of radices that are valid for the given numeric
 * input string. For example, a string that contains 'A' cannot be
 * base 10.
 *
 * @param rawInput - The raw string whose potential bases we will calculate.
 *
 * @returns a list of radices that we could potentially convert the number
 * into.
 */
export const validRadices = (rawInput: string): number[] => {
  const input = rawInput.trim().replace(',', '')

  const radices: number[] = []

  if (isEmpty(input) || input === undefined) {
    return radices
  }

  for (let radix = minRadix; radix <= maxRadix; radix++) {
    if (
      parseInt(input, radix).toString(radix).toLowerCase() ===
      input.toLowerCase()
    ) {
      radices.push(radix)
    }
  }

  return radices
}
