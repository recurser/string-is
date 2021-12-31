import { input as yamlInput } from '@lib/inputs/YamlInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'
import { ConverterOptions, Obj } from '@lib/types'

export const id = 'yaml'

export const outputId = 'yaml'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = yamlInput(data)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj as Obj, options)
}
