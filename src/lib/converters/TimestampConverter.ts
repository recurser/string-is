import { ConverterOptions } from '@lib/types'
import { output as datetimeOutput } from '@lib/outputs/DatetimeOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'timestampConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'datetime'

/**
 * An operation that formats the given timestamp input string
 * to various datetime formats.
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
  return datetimeOutput(input, options)
}
