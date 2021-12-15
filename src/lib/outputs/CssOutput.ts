import parserPostcss from 'prettier/parser-postcss'
import { format } from 'prettier/standalone'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
}

export const id = 'css'

export const error = (input: string) => {
  try {
    format(input, { parser: 'css', plugins: [parserPostcss] })
  } catch (err) {
    return (err as Error).message
  }

  return undefined
}

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  try {
    return format(input, {
      ...defaultOptions,
      ...options,
      parser: 'css',
      plugins: [parserPostcss],
    })
  } catch (err) {
    return input
  }
}
