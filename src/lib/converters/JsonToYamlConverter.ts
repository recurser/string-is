import { ConverterOptions } from '@lib/types'
import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

export const id = 'jsonToYaml'

export const outputId = 'yaml'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  const obj = jsonInput(data)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj, options)
}
