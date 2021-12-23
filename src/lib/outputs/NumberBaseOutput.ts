import { isEmpty, truncate } from 'lodash'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  fromRadix: 10,
  toRadix: 16,
}

export const id = 'numberBase'

// We support the same radix range as Number.toString()
export const maxRadix = 36
export const minRadix = 2

export const error = (input: string) => {
  if (validRadices(input).length === 0) {
    return `'${truncate(input, { length: 20 })}' is not a valid number`
  }

  return undefined
}

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const { fromRadix, toRadix } = { ...defaultOptions, ...options }
  return parseInt(input, fromRadix).toString(toRadix).toUpperCase()
}

export const validRadices = (input: string | undefined): number[] => {
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
