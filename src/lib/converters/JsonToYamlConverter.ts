import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'
import { ConverterOptions } from '@lib/types'

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

// Some strings (eg. '[1, 2, 3]') get returned as valid YAML. If something
// can be parsed as JSON, it is extremely unlikely to also be YAML - the
// JSON parsing is more likely to be correct.
export const overrides = ['yaml', 'yamlToJson']
