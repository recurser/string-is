import { ConverterOptions, Obj } from '@lib/types'
import { sortByKeys } from '@lib/utilities/String'

export const id = 'json'

export const output = (input: Obj, options: ConverterOptions): string => {
  let processed = input

  if (options.sortKeys) {
    processed = sortByKeys(input)
  }

  return JSON.stringify(processed, null, (options.space as number) || 2)
}
