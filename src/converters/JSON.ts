import { parse } from 'hjson'

export const id = 'json'

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

export const operation = (input: string) => {
  let obj
  try {
    obj = parse(input)
  } catch (err) {
    return ''
  }

  return JSON.stringify(obj, null, 2)
}
