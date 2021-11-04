import { ConverterOptions } from '@lib/types'

export const id = 'urlDecode'

export const outputId = 'plain'

/**
 * Allows the converter to be hidden if it's not a good match
 * for the input string.
 *
 * In this case, there's no point URL-encoding a string if
 * the output is identical to the input.
 */
export const eligible = (input: string): boolean => {
  return operation(input, {}) !== input
}

export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return decodeURIComponent(input)
}
