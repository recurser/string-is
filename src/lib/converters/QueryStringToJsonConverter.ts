import type { ConverterOptions, Obj } from '@lib/types'
import { output as jsonOutput } from '@lib/outputs/JsonOutput'
import { input as queryStringInput } from '@lib/inputs/QueryStringInput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'queryStringToJsonConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'json'

/**
 * An operation that converts the given browser query string to JSON.
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

  return jsonOutput(obj as Obj, options)
}
