import { ConverterOptions } from '@lib/types'

export const id = 'null'

export const outputId = 'plain'

// This converter is used in the case when no converter has been chosen.
export const operation = (
  _input: string,
  _options: ConverterOptions = {},
): undefined => {
  return undefined
}
