import { ConverterOptions, Obj } from '@lib/types'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { input as yamlInput } from '@lib/inputs/YamlInput'

export const id = 'yamlToJson'

export const outputId = 'json'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = yamlInput(data)
  if (!obj) {
    return ''
  }

  return jsonOutput(obj as Obj, options)
}
