import type { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'lowerCase'

/**
 * Converts the given string to lowercase.
 *
 * @param input    - The string to convert.
 * @param _options - Ignored by this formatter.
 *
 * @returns the input string, converted to lowercase.
 */
export const output = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return input.toLocaleLowerCase()
}
