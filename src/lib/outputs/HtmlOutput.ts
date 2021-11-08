import { html } from 'js-beautify'

import { ConverterOptions } from '@lib/types'

export const id = 'html'

const defaults = {
  indent_char: ' ',
  indent_inner_html: true,
  indent_size: 2,
  space_in_empty_paren: true,
}

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  console.log(options)
  return html(input, { ...defaults, ...options })
}
