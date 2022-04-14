import type { ConverterOptions, Obj } from '@lib/types'
import { output as tomlOutput } from '@lib/outputs/TomlOutput'
import { input as yamlInput } from '@lib/inputs/YamlInput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'yamlToTomlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'toml'

/**
 * An operation that formats the given YAML input string as TOML.
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
  const obj = yamlInput(input)
  if (!obj) {
    return ''
  }

  return tomlOutput(obj as Obj, options)
}
