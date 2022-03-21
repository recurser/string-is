import { XMLParser } from 'fast-xml-parser'
import { isEmpty } from 'lodash'

import { Obj } from '@lib/types'

/**
 * Parses the given XML input string into an object.
 *
 * @param data - the XML string to parse.
 *
 * @returns the parsed object.
 *
 * @throws an exception if the string cannot be parsed.
 */
export const input = (data: string): Obj | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const parser = new XMLParser({
    allowBooleanAttributes: true,
    ignoreDeclaration: true,
  })
  const result = parser.parse(data)

  return result as Obj
}
