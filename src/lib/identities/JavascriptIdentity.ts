import { parse } from 'acorn'
import { isEmpty } from 'lodash'

import { Converter, JavascriptConverter } from '@lib/converters'

export const id = 'javascript'

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

export const converters = [JavascriptConverter] as Converter[]
