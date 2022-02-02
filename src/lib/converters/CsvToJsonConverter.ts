import { ConverterOptions } from '@lib/types'
import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'csvToJson'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
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
