import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as csvOutput } from '@lib/outputs/CsvOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'csv'

export const outputId = 'csv'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = csvInput(data)
  if (!obj) {
    return ''
  }

  return csvOutput(obj, options)
}
