import { ConverterOptions } from '@lib/types'
import { output as lessOutput } from '@lib/outputs/LessOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'less'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'css'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return lessOutput(input, options)
}
