import parserPostcss from 'prettier/parser-postcss'
import { format } from 'prettier/standalone'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
}

export const id = 'css'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'scss',
    plugins: [parserPostcss],
  })
}
