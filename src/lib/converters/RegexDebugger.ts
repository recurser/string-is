import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'regex'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'regex'

export const operation = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return input
}
