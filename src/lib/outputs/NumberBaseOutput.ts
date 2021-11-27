import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  fromRadix: 10,
  toRadix: 16,
}

export const id = 'numberBase'

// We support the same radix range as Number.toString()
export const maxRadix = 36
export const minRadix = 2

export const validRadices = (input: string) => {
  const radices = []

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

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const { fromRadix, toRadix } = { ...defaultOptions, ...options }
  return parseInt(input, fromRadix).toString(toRadix).toUpperCase()
}
