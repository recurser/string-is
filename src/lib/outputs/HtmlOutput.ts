import parserHtml from 'prettier/parser-html'
import { format } from 'prettier/standalone'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
}

export const id = 'html'

export const error = (input: string) => {
  try {
    format(input, { parser: 'html', plugins: [parserHtml] })
  } catch (err) {
    return (err as Error).message
  }

  return undefined
}

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
