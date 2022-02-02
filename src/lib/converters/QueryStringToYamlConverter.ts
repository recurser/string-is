import { ConverterOptions, Obj } from '@lib/types'
import { input as queryStringInput } from '@lib/inputs/QueryStringInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'queryStringToYaml'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
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
