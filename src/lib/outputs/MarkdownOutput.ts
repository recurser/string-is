import { format } from 'prettier/standalone'
import parserMarkdown from 'prettier/parser-markdown'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  tabWidth: 2,
}

export const id = 'markdown'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return format(input, {
    ...defaultOptions,
    ...options,
    parser: 'markdown',
    plugins: [parserMarkdown],
  })
}
