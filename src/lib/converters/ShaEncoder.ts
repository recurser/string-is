import { ConverterOptions } from '@lib/types'
import { output as shaOutput } from '@lib/outputs/ShaOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'sha'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'sha'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return shaOutput(input, options)
}
