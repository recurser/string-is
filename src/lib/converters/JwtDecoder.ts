import { ConverterOptions } from '@lib/types'
import { input as jwtInput } from '@lib/inputs/JwtInput'
import { output as jwtOutput } from '@lib/outputs/JwtOutput'

export const id = 'jwt'

export const outputId = 'jwt'

export const operation = (
  data: string,
  _options: ConverterOptions = {},
): string => {
  const jwt = jwtInput(data)
  if (!jwt) {
    return ''
  }

  return jwtOutput(jwt)
}
