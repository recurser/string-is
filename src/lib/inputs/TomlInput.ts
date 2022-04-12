import { isEmpty } from 'lodash'
import parse from '@iarna/toml/parse-string'

import type { Obj } from '@lib/types'

/**
 * Parses the given TOML input string into an object.
 *
 * @param data - the TOML string to parse.
 *
 * @returns the parsed object.
 *
 * @throws an exception if the string cannot be parsed.
 */
export const input = (data: string): Obj | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const result = parse(data)

  return result as Obj
}
