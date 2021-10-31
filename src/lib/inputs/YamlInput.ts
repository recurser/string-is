import { load } from 'js-yaml'
import { isEmpty } from 'lodash'

import { Obj } from '@lib/types'

export const input = (input: string): string | Obj | undefined => {
  if (isEmpty(input)) {
    return undefined
  }

  try {
    return load(input) as string | Obj
  } catch (err) {
    return undefined
  }
}
