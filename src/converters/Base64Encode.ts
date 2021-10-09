import { encode } from 'js-base64'

export const id = 'base64encode'

export const confidence = (_input: string) => {
  return 1
}

export const operation = (input: string) => {
  return encode(input)
}
