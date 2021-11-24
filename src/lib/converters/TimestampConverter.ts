import { output as datetimeOutput } from '@lib/outputs/DatetimeOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'timestamp'

export const outputId = 'datetime'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return datetimeOutput(input, options)
}
