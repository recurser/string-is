import { ConverterOptions, Obj } from '@lib/types'
import { input as queryStringInput } from '@lib/inputs/QueryStringInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

export const id = 'queryStringToYaml'

export const outputId = 'json'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = queryStringInput(data)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj as Obj, options)
}
