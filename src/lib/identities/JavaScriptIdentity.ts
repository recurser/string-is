import { isEmpty } from 'lodash'
import parserBabel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'

import { Converter, JavaScriptFormatter } from '@lib/converters'

export const id = 'javaScript'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  format(input, { parser: 'babel', plugins: [parserBabel] })

  // Lots of other types (eg. number base conversion, timestamps) can be parsed as Javascript.
  // We dial down the confidence here to give the other types priority.
  return 90
}

export const converters = [JavaScriptFormatter] as Converter[]
