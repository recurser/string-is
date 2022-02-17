import { isEmpty } from 'lodash'
import { load } from 'js-yaml'

import { Obj } from '@lib/types'

/**
 * Parses the given YAML input string into an object.
 *
 * @param data - the YAML string to parse.
 *
 * @returns the parsed object.
 *
 * @throws an exception if the string cannot be parsed.
 */
export const input = (data: string): Obj | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const result = load(data)

  if (typeof result === 'string') {
    throw new Error('The input could not be parsed as valid YAML')
  }

  return result as Obj
}
