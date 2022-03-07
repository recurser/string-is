import { ConverterOptions } from '@lib/types'
import { output as cssOutput } from '@lib/outputs/CssOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'cssFormatter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'css'

/**
 * An operation that formats the given CSS input string.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return cssOutput(input, options)
}
