import { html } from 'js-beautify'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  indent_char: ' ',
  indent_inner_html: true,
  indent_size: 2,
  space_in_empty_paren: true,
}

export const id = 'html'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return html(input, { ...defaultOptions, ...options })
}
