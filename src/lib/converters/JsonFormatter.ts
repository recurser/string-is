import { ConverterOptions } from '@lib/types'
import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'

export const id = 'json'

export const outputId = 'json'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = jsonInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj, options)
}
