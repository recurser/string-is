import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'csvToJson'

export const outputId = 'json'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = csvInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj, options)
}
