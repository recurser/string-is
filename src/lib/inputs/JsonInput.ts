import { isEmpty } from 'lodash'
import { parse } from 'hjson'

import type { Obj } from '@lib/types'

/**
 * Parses the given JSON input string into an object.
 *
 * @param data - the JSON string to parse.
 *
 * @returns the parsed object.
 *
 * @throws an exception if the string cannot be parsed.
 */
export const input = (data: string): Obj | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const result = parse(data) as Obj

  if (typeof result === 'string') {
    throw new Error('The input could not be parsed as valid JSON')
  }

  return result as Obj
}
