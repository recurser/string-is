import { format } from 'prettier/standalone'
import { isEmpty } from 'lodash'
import parserPostcss from 'prettier/parser-postcss'

import { Converter, CssFormatter } from '@lib/converters'

export const id = 'css'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  // Prettier will throw an exception if this fails.
  format(input, { parser: 'scss', plugins: [parserPostcss] })

  // Let the LessFormatter and ScssFormatter take precedence, if they get a match.
  return 80
}

export const converters = [CssFormatter] as Converter[]
