import * as Base64EncodedInput from '@lib/inputs/Base64EncodedInput'
import * as CsvInput from '@lib/inputs/CsvInput'
import * as HtmlInput from '@lib/inputs/HtmlInput'
import * as JsonArrayInput from '@lib/inputs/JsonArrayInput'
import * as JsonObjectInput from '@lib/inputs/JsonObjectInput'
import * as PlainInput from '@lib/inputs/PlainInput'
import * as UrlEncodedInput from '@lib/inputs/UrlEncodedInput'
import * as YamlInput from '@lib/inputs/YamlInput'
import { Output } from '@lib/outputs'

export interface Input {
  confidence: (input: string) => number
  id: string
  outputs: Output[]
}

export const inputs: Input[] = [
  Base64EncodedInput,
  CsvInput,
  HtmlInput,
  JsonArrayInput,
  JsonObjectInput,
  PlainInput,
  UrlEncodedInput,
  YamlInput,
]
