import { decode } from 'js-base64'

export const id = 'base64Decode'

export const operation = (input: string) => {
  return decode(input)
}
