import { html } from 'js-beautify'

export const id = 'html'

const defaults = {
  indent_char: ' ',
  indent_inner_html: true,
  indent_size: 2,
  space_in_empty_paren: true,
}

export const operation = (input: string) => {
  return html(input, defaults)
}
