import { ConverterOptions } from '@lib/types'
import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'json'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
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
