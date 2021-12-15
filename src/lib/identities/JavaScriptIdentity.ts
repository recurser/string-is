import { parse } from 'acorn'
import { isEmpty } from 'lodash'

import { Converter, JavaScriptConverter } from '@lib/converters'

export const id = 'javaScript'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  try {
    parse(input, { ecmaVersion: 'latest' })
  } catch (err) {
    return 0
  }

  return 100
}

export const converters = [JavaScriptConverter] as Converter[]
