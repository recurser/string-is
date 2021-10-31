import { Obj } from '@lib/types'

export const id = 'json'

export const output = (input: Obj): string => {
  return JSON.stringify(input, null, 2)
}
