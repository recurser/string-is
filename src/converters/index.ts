import * as Base64Decode from '@converters/Base64Decode'
import * as Base64Encode from '@converters/Base64Encode'
import * as JSON from '@converters/JSON'

export interface Converter {
  confidence: (input: string) => number
  operation: (input: string) => string
  id: string
}

export const converters: Converter[] = [Base64Decode, Base64Encode, JSON]
