import { css } from 'js-beautify'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  indent_char: ' ',
  indent_size: 2,
}

export const id = 'css'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return css(input, { ...defaultOptions, ...options })
}
