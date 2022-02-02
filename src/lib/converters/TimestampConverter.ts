import { ConverterOptions } from '@lib/types'
import { output as datetimeOutput } from '@lib/outputs/DatetimeOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'timestamp'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'datetime'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return datetimeOutput(input, options)
}
