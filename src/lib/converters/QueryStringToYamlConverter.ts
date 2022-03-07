import { ConverterOptions, Obj } from '@lib/types'
import { input as queryStringInput } from '@lib/inputs/QueryStringInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'queryStringToYamlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'json'

/**
 * An operation that converts the given browser query string to YAML.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const obj = queryStringInput(input)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj as Obj, options)
}
