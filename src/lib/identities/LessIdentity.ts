import { format } from 'prettier/standalone'
import { isEmpty } from 'lodash'
import parserPostcss from 'prettier/parser-postcss'

import { Converter, LessFormatter } from '@lib/converters'

export const id = 'less'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  // Prettier will throw an exception if this fails.
  format(input, { parser: 'less', plugins: [parserPostcss] })

  // Let the ScssFormatter take precedence, if it gets a match.
  return 90
}

export const converters = [LessFormatter] as Converter[]
