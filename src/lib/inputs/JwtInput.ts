import type { Jwt } from 'jsonwebtoken'
import { decode } from 'jsonwebtoken'
import { isEmpty } from 'lodash'

export const input = (input: string): Jwt | undefined => {
  if (isEmpty(input)) {
    return undefined
  }

  const payload = decode(input, { complete: true })
  if (payload === null || isEmpty(payload)) {
    return undefined
  }

  return payload
}
