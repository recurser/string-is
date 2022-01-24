import { ConverterOptions } from '@lib/types'
import { output as datetimeOutput } from '@lib/outputs/DatetimeOutput'

export const id = 'timestamp'

export const outputId = 'datetime'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return datetimeOutput(input, options)
}
