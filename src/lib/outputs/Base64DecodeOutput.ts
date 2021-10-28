import { decode } from 'js-base64'

export const id = 'base64Decode'

export const operation = (input: string): string => {
  return decode(input)
}

export const overrides = ['base64Encode']
