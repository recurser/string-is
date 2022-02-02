import { ConverterOptions } from '@lib/types'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'null'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'plain'

// This converter is used in the case when no converter has been chosen.
export const operation = (
  _input: string,
  _options: ConverterOptions = {},
): string => {
  return ''
}
