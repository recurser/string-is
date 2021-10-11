import { parse } from 'hjson'

import { JsonOutput, Output } from '@lib/outputs'

export const confidence = (input: string) => {
  if (input == '') {
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

export const outputs = [JsonOutput] as Output[]
