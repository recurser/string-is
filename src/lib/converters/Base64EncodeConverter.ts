import { encode } from 'js-base64'

export const id = 'base64Encode'

export const output = 'plain'

export const operation = (input: string): string => {
  return encode(input)
}

export const overrides = ['base64Decode']
