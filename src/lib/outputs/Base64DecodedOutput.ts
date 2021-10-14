import { decode } from 'js-base64'

export const id = 'base64Decoded'

export const operation = (input: string) => {
  return decode(input)
}
