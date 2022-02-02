import { ConverterOptions, Obj } from '@lib/types'
import { input as yamlInput } from '@lib/inputs/YamlInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'yaml'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
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
