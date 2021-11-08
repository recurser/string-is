import { ConverterOptions, Obj } from '@lib/types'
import { sortByKeys } from '@lib/utilities/String'

export const id = 'json'

export const output = (
  input: Obj,
  { sortKeys, ...options }: ConverterOptions = {},
): string => {
  let processed = input

  if (sortKeys) {
    processed = sortByKeys(input)
  }

  return JSON.stringify(processed, undefined, (options.space || '  ') as string)
}
