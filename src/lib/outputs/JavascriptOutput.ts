import { js, JSBeautifyOptions } from 'js-beautify'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  brace_style: 'collapse',
  break_chained_methods: false,
  comma_first: false,
  end_with_newline: false,
  indent_char: ' ',
  indent_empty_lines: false,
  indent_inner_html: false,
  indent_scripts: 'normal',
  indent_size: '2',
  jslint_happy: false,
  keep_array_indentation: false,
  max_preserve_newlines: '5',
  preserve_newlines: true,
  space_before_conditional: true,
  unescape_strings: false,
  wrap_line_length: '0',
}

export const id = 'javascript'

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return js(input, {
    ...defaultOptions,
    ...options,
  } as unknown as JSBeautifyOptions)
}
