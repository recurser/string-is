import { Converter } from '@lib/converters'
import * as Base64EncodedIdentity from '@lib/identities/Base64EncodedIdentity'
import * as CsvIdentity from '@lib/identities/CsvIdentity'
import * as HtmlIdentity from '@lib/identities/HtmlIdentity'
import * as JsonArrayIdentity from '@lib/identities/JsonArrayIdentity'
import * as JsonObjectIdentity from '@lib/identities/JsonObjectIdentity'
import * as PlainIdentity from '@lib/identities/PlainIdentity'
import * as UrlEncodedIdentity from '@lib/identities/UrlEncodedIdentity'
import * as YamlIdentity from '@lib/identities/YamlIdentity'

export interface Identity {
  confidence: (input: string) => number
  id: string
  converters: Converter[]
}

export const identities: Identity[] = [
  Base64EncodedIdentity,
  CsvIdentity,
  HtmlIdentity,
  JsonArrayIdentity,
  JsonObjectIdentity,
  PlainIdentity,
  UrlEncodedIdentity,
  YamlIdentity,
]
