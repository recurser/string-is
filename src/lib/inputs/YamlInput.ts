import { load } from 'js-yaml'
import { isEmpty } from 'lodash'

import { Obj } from '@lib/types'

export const input = (input: string): Obj | undefined => {
  if (isEmpty(input)) {
    return undefined
  }

  const result = load(input)

  if (typeof result === 'string') {
    return undefined
  }

  return result as Obj
}
