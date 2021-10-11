import { encode } from 'js-base64'

export const id = 'base64encoded'

export const operation = (input: string) => {
  return encode(input)
}
