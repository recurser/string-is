import { ConverterOptions, Obj } from '@lib/types'
import { output as xmlOutput } from '@lib/outputs/XmlOutput'
import { input as yamlInput } from '@lib/inputs/YamlInput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'yamlToXmlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'html'

/**
 * An operation that formats the given YAML input string as XML.
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

  return xmlOutput(obj as Obj, options)
}
