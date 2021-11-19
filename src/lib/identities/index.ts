import { Converter } from '@lib/converters'

export * as Base64EncodedIdentity from '@lib/identities/Base64EncodedIdentity'
export * as CsvIdentity from '@lib/identities/CsvIdentity'
export * as HtmlIdentity from '@lib/identities/HtmlIdentity'
export * as JsonArrayIdentity from '@lib/identities/JsonArrayIdentity'
export * as JsonObjectIdentity from '@lib/identities/JsonObjectIdentity'
export * as JsonPrimitiveArrayIdentity from '@lib/identities/JsonPrimitiveArrayIdentity'
export * as JsonPrimitiveObjectIdentity from '@lib/identities/JsonPrimitiveObjectIdentity'
export * as PlainIdentity from '@lib/identities/PlainIdentity'
export * as UrlEncodedIdentity from '@lib/identities/UrlEncodedIdentity'
export * as XmlIdentity from '@lib/identities/XmlIdentity'
export * as YamlIdentity from '@lib/identities/YamlIdentity'

export interface Identity {
  confidence: (input: string) => number
  id: string
  converters: Converter[]
}
