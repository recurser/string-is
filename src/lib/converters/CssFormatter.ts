import { ConverterOptions } from '@lib/types'
import { output as cssOutput } from '@lib/outputs/CssOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'css'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'css'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return cssOutput(input, options)
}
