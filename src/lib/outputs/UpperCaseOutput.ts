import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'upperCase'

/**
 * Converts the given string to uppercase.
 *
 * @param input    - The string to convert.
 * @param _options - Ignored by this formatter.
 *
 * @returns the input string, converted to uppercase.
 */
export const output = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return input.toLocaleUpperCase()
}
