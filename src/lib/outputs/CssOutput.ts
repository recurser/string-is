import { css } from 'js-beautify'
import parserPostcss from 'prettier/parser-postcss'
import { format } from 'prettier/standalone'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  indent_char: ' ',
  indent_size: 2,
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
  return css(input, { ...defaultOptions, ...options })
}
