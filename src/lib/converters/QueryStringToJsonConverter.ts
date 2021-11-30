import { input as queryStringInput } from '@lib/inputs/QueryStringInput'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { ConverterOptions, Obj } from '@lib/types'

export const id = 'queryStringToJson'

export const outputId = 'json'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = queryStringInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj as Obj, options)
}
