import type { ConverterOptions } from '@lib/types'
import { input as jsonInput } from '@lib/inputs/JsonInput'
import { output as xmlOutput } from '@lib/outputs/XmlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'jsonToXmlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'html'

/**
 * An operation that formats the given JSON input string as YAML.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = async (
  input: string,
  options: ConverterOptions = {},
): Promise<string> => {
  const obj = jsonInput(input)
  if (!obj) {
    return ''
  }

  return xmlOutput(obj, options)
}
