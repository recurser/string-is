import parserBabel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
}

export const id = 'javaScript'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'babel',
    plugins: [parserBabel],
  })
}
