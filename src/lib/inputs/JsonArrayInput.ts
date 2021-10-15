import { parse } from 'hjson'
import { isEmpty } from 'lodash'

import {
  Base64EncodeOutput,
  JsonOutput,
  Output,
  UrlEncodeOutput,
} from '@lib/outputs'

export const id = 'jsonArray'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  } else if (/^\s*\[\s*\]\s*$/.test(input)) {
    // There's not much value in beautifying an empty object.
    return 0
  }

  let obj

  try {
    obj = parse(input)
  } catch (err) {
    return 0
  }

  const type = Object.prototype.toString.call(obj)
  return type === '[object Array]' ? 100 : 0
}

export const outputs = [
  JsonOutput,
  Base64EncodeOutput,
  UrlEncodeOutput,
] as Output[]
