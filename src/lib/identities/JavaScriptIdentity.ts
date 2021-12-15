import { isEmpty } from 'lodash'
import parserBabel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'

import { Converter, JavaScriptConverter } from '@lib/converters'

export const id = 'javaScript'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  try {
    format(input, { parser: 'babel', plugins: [parserBabel] })
  } catch (err) {
    return 0
  }

  return 100
}

export const converters = [JavaScriptConverter] as Converter[]
