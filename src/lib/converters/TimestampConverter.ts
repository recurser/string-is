import { output as datetimeOutput } from '@lib/outputs/DatetimeOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'timestamp'

export const outputId = 'datetime'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const multiplier = input.length === 10 ? 1000 : 1
  const datetime = new Date(parseInt(input, 10) * multiplier)
  return datetimeOutput(datetime, options)
}
