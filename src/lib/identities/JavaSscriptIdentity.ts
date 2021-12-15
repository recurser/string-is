import { parse } from 'acorn'
import { isEmpty } from 'lodash'

import { Converter, JavaSscriptConverter } from '@lib/converters'

export const id = 'javaSscript'

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

export const converters = [JavaSscriptConverter] as Converter[]
