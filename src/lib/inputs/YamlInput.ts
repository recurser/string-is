import { load } from 'js-yaml'
import { isEmpty } from 'lodash'

import { Output, YamlOutput, YamlToJsonOutput } from '@lib/outputs'

export const id = 'yaml'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  try {
    const doc = load(input, { onWarning: (w) => console.log(w) })
    if (typeof doc === 'string') {
      return 0
    }
  } catch (_err) {
    return 0
  }

  return 100
}

export const outputs = [YamlOutput, YamlToJsonOutput] as Output[]
