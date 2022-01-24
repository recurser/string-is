import { isEmpty } from 'lodash'
import { load } from 'js-yaml'

import { Obj } from '@lib/types'

export const input = (input: string): Obj | undefined => {
  if (isEmpty(input)) {
    return undefined
  }

  const result = load(input)

  if (typeof result === 'string') {
    throw new Error('The input could not be parsed as valid YAML')
  }

  return result as Obj
}
