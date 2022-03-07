import { ConverterOptions } from '@lib/types'
import { output as javaScriptOutput } from '@lib/outputs/JavaScriptOutput'
import { input as jsonInput } from '@lib/inputs/JsonInput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'jsonToJavaScriptConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'javaScript'

/**
 * An operation that formats the given JSON input string as JavaScript.
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

  return javaScriptOutput(`const data = ${JSON.stringify(obj)}`, options)
}
