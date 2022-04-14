import type { ConverterOptions, Obj } from '@lib/types'
import { input as queryStringInput } from '@lib/inputs/QueryStringInput'
import { output as tomlOutput } from '@lib/outputs/TomlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'queryStringToTomlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'toml'

/**
 * An operation that converts the given browser query string to TOML.
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

  return tomlOutput(obj as Obj, options)
}
