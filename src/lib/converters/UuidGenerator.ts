import { ConverterOptions } from '@lib/types'
import { output as uuidOutput } from '@lib/outputs/UuidOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'uuid'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'uuid'

export const operation = (
  data: string,
  options: ConverterOptions = {},
): string => {
  return uuidOutput(data, options)
}
