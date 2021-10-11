import { parse } from 'hjson'
import { isEmpty } from 'lodash'

import { Base64EncodedOutput, JsonOutput, Output } from '@lib/outputs'

export const id = 'json'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  let obj

  try {
    obj = parse(input)
  } catch (err) {
    return 0
  }

  const type = Object.prototype.toString.call(obj)
  return type === '[object Object]' || type === '[object Array]' ? 100 : 0
}

export const outputs = [JsonOutput, Base64EncodedOutput] as Output[]
