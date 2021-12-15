import { Converter } from '@lib/converters'

export * as Base64DecodeIdentity from '@lib/identities/Base64DecodeIdentity'
export * as Base64EncodeIdentity from '@lib/identities/Base64EncodeIdentity'
export * as CssIdentity from '@lib/identities/CssIdentity'
export * as CsvIdentity from '@lib/identities/CsvIdentity'
export * as HtmlIdentity from '@lib/identities/HtmlIdentity'
export * as JavaSscriptIdentity from '@lib/identities/JavaSscriptIdentity'
export * as JsonArrayIdentity from '@lib/identities/JsonArrayIdentity'
export * as JsonObjectIdentity from '@lib/identities/JsonObjectIdentity'
export * as JsonPrimitiveArrayIdentity from '@lib/identities/JsonPrimitiveArrayIdentity'
export * as JsonPrimitiveObjectIdentity from '@lib/identities/JsonPrimitiveObjectIdentity'
export * as JwtIdentity from '@lib/identities/JwtIdentity'
export * as LowerCaseIdentity from '@lib/identities/LowerCaseIdentity'
export * as NumberIdentity from '@lib/identities/NumberIdentity'
export * as PlainIdentity from '@lib/identities/PlainIdentity'
export * as QueryStringIdentity from '@lib/identities/QueryStringIdentity'
export * as TimestampIdentity from '@lib/identities/TimestampIdentity'
export * as UpperCaseIdentity from '@lib/identities/UpperCaseIdentity'
export * as UrlDecodeIdentity from '@lib/identities/UrlDecodeIdentity'
export * as UrlEncodeIdentity from '@lib/identities/UrlEncodeIdentity'
export * as XmlIdentity from '@lib/identities/XmlIdentity'
export * as YamlIdentity from '@lib/identities/YamlIdentity'

export interface Identity {
  confidence: (input: string) => number
  id: string
  converters: Converter[]
}
