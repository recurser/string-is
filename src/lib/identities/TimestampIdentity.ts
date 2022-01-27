import { Converter, TimestampConverter } from '@lib/converters'
import { input as timestampInput } from '@lib/inputs/TimestampInput'

export const id = 'timestamp'

export const confidence = (input: string) => {
  if (timestampInput(input) === undefined) {
    return 0
  }

  return 100
}

export const converters = [TimestampConverter] as Converter[]
