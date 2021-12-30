import { parse } from 'hjson'
import { isEmpty } from 'lodash'

import { Obj } from '@lib/types'

export const input = (input: string): Obj | undefined => {
  if (isEmpty(input)) {
    return undefined
  }

  const result = parse(input) as Obj

  if (typeof result === 'string') {
    throw new Error('The input could not be parsed as valid JSON')
  }

  return result as Obj
}
