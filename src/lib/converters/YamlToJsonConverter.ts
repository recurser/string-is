import { load } from 'js-yaml'

export const id = 'yamlToJson'

export const operation = (input: string): string => {
  let obj

  try {
    obj = load(input)
  } catch (err) {
    return ''
  }

  return JSON.stringify(obj, null, 2)
}
