import type { ConverterOptions } from '@lib/types'
import { input as csvInput } from '@lib/inputs/CsvInput'
import { output as xmlOutput } from '@lib/outputs/XmlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'csvToXmlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'html'

/**
 * An operation that formats the given CSV input string as XML.
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

  return xmlOutput(obj, options)
}
