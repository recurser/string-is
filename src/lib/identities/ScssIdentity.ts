import { isEmpty } from 'lodash'
import parserPostcss from 'prettier/parser-postcss'
import { format } from 'prettier/standalone'

import { Converter, ScssFormatter } from '@lib/converters'

export const id = 'scss'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  // Prettier will throw an exception if this fails.
  format(input, { parser: 'scss', plugins: [parserPostcss] })

  return 100
}

export const converters = [ScssFormatter] as Converter[]
