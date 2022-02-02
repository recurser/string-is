import type { Jwt } from 'jsonwebtoken'
import { decode } from 'jsonwebtoken'
import { isEmpty } from 'lodash'

/**
 * Parses the given JWT token into a payload containing
 * a header and footer.
 *
 * @param data - the JWT token to parse.
 *
 * @returns the parsed JWT payload.
 */
export const input = (data: string): Jwt | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const payload = decode(data, { complete: true })
  if (payload === null || isEmpty(payload)) {
    throw new Error('The input could not be parsed as a valid JWT')
  }

  return payload
}
