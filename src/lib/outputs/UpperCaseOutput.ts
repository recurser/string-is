import { ConverterOptions } from '@lib/types'

export const id = 'upperCase'

export const output = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return input.toLocaleUpperCase()
}
