import { format } from 'prettier/standalone'
import parserHtml from 'prettier/parser-html'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
}

export const id = 'html'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'html',
    plugins: [parserHtml],
  })
}
