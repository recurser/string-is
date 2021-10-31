import { load } from 'js-yaml'

import { output, YamlInput } from '@lib/outputs/YamlOutput'

export const id = 'yaml'

export const operation = (input: string): string => {
  let obj

  try {
    obj = load(input)
  } catch (err) {
    return ''
  }

  return output(obj as YamlInput)
}
