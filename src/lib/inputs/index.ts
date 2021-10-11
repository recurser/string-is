import * as Base64EncodedInput from '@lib/inputs/Base64EncodedInput'
import * as JsonInput from '@lib/inputs/JsonInput'
import * as PlainInput from '@lib/inputs/PlainInput'
import { Output } from '@lib/outputs'

export interface Input {
  confidence: (input: string) => number
  outputs: Output[]
}

export const inputs: Input[] = [Base64EncodedInput, JsonInput, PlainInput]
