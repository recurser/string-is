import type { ConverterOptions } from '@lib/types'
import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as tomlOutput } from '@lib/outputs/TomlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'jsonToTomlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'toml'

/**
 * An operation that formats the given JSON input string as TOML.
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
  const obj = jsonInput(input)
  if (!obj) {
    return ''
  }

  return tomlOutput(obj, options)
}
