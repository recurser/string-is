import { ConverterOptions } from '@lib/types'
import { output as javaScriptOutput } from '@lib/outputs/JavaScriptOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'javaScript'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'javaScript'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return javaScriptOutput(input, options)
}
