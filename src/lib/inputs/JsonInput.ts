import { parse } from 'hjson'
import { isEmpty } from 'lodash'

import { Obj } from '@lib/types'

export const input = (input: string): Obj | undefined => {
  if (isEmpty(input)) {
    return undefined
  }

  try {
    return parse(input) as Obj
  } catch (err) {
    return undefined
  }
}
