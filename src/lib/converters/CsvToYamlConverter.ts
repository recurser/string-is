import { ConverterOptions } from '@lib/types'
import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as yamlOutput } from '@lib/outputs/YamlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'csvToYamlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'yaml'

/**
 * An operation that formats the given CSV input string as YAML.
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
  const obj = csvInput(input)
  if (!obj) {
    return ''
  }

  return yamlOutput(obj, options)
}
