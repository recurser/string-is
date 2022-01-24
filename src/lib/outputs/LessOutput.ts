import { format } from 'prettier/standalone'
import parserPostcss from 'prettier/parser-postcss'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
}

export const id = 'less'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'less',
    plugins: [parserPostcss],
  })
}
