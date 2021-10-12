import * as Base64EncodedInput from '@lib/inputs/Base64EncodedInput'
import * as JsonArrayInput from '@lib/inputs/JsonArrayInput'
import * as JsonObjectInput from '@lib/inputs/JsonObjectInput'
import * as PlainInput from '@lib/inputs/PlainInput'
import { Output } from '@lib/outputs'

export interface Input {
  confidence: (input: string) => number
  id: string
  outputs: Output[]
}

export const inputs: Input[] = [
  Base64EncodedInput,
  JsonArrayInput,
  JsonObjectInput,
  PlainInput,
]
