import { load } from 'js-yaml'

import { JsonInput, output } from '@lib/outputs/JsonOutput'

export const id = 'yamlToJson'

export const operation = (input: string): string => {
  let obj

  try {
    obj = load(input)
  } catch (err) {
    return ''
  }

  return output(obj as JsonInput)
}
