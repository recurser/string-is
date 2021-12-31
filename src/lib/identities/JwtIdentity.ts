import { Converter, JwtDecoder } from '@lib/converters'
import { input as jwtInput } from '@lib/inputs/JwtInput'

export const id = 'jwt'

export const confidence = (input: string) => {
  if (jwtInput(input) === undefined) {
    return 0
  }

  return 100
}

export const converters = [JwtDecoder] as Converter[]
