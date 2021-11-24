import { ConverterOptions } from '@lib/types'

export const id = 'lowerCase'

export const output = (
  input: string,
  _options: ConverterOptions = {},
): string => {
  return input.toLocaleLowerCase()
}
