import { parse } from 'hjson'

export const id = 'json'

export const operation = (input: string): string => {
  let obj

  try {
    obj = parse(input)
  } catch (err) {
    return ''
  }

  return JSON.stringify(obj, null, 2)
}
