import { parse } from 'hjson'

import { output } from '@lib/outputs/JsonOutput'

export const id = 'json'

export const operation = (input: string): string => {
  let obj

  try {
    obj = parse(input)
  } catch (err) {
    return ''
  }

  return output(obj)
}
