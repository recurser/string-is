import { ConverterOptions } from '@lib/types'
import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as csvOutput } from '@lib/outputs/CsvOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'csv'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
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
