import { Converter } from '@lib/converters'

export * as Base64DecodeIdentity from '@lib/identities/Base64DecodeIdentity'
export * as Base64EncodeIdentity from '@lib/identities/Base64EncodeIdentity'
export * as CssIdentity from '@lib/identities/CssIdentity'
export * as CsvIdentity from '@lib/identities/CsvIdentity'
export * as HtmlIdentity from '@lib/identities/HtmlIdentity'
export * as JavaScriptIdentity from '@lib/identities/JavaScriptIdentity'
export * as JsonArrayIdentity from '@lib/identities/JsonArrayIdentity'
export * as JsonObjectIdentity from '@lib/identities/JsonObjectIdentity'
export * as JsonPrimitiveArrayIdentity from '@lib/identities/JsonPrimitiveArrayIdentity'
export * as JsonPrimitiveObjectIdentity from '@lib/identities/JsonPrimitiveObjectIdentity'
export * as JwtIdentity from '@lib/identities/JwtIdentity'
export * as LessIdentity from '@lib/identities/LessIdentity'
export * as LowerCaseIdentity from '@lib/identities/LowerCaseIdentity'
export * as MarkdownIdentity from '@lib/identities/MarkdownIdentity'
export * as NumberIdentity from '@lib/identities/NumberIdentity'
export * as PlainIdentity from '@lib/identities/PlainIdentity'
export * as QueryStringIdentity from '@lib/identities/QueryStringIdentity'
export * as RegexIdentity from '@lib/identities/RegexIdentity'
export * as ScssIdentity from '@lib/identities/ScssIdentity'
export * as SqlIdentity from '@lib/identities/SqlIdentity'
export * as TimestampIdentity from '@lib/identities/TimestampIdentity'
export * as UpperCaseIdentity from '@lib/identities/UpperCaseIdentity'
export * as UrlDecodeIdentity from '@lib/identities/UrlDecodeIdentity'
export * as UrlEncodeIdentity from '@lib/identities/UrlEncodeIdentity'
export * as UuidGeneratorIdentity from '@lib/identities/UuidGeneratorIdentity'
export * as XmlIdentity from '@lib/identities/XmlIdentity'
export * as YamlIdentity from '@lib/identities/YamlIdentity'

export interface Identity {
  /**
   * A number betwen 0 and 100 indicating the confidence
   * that the given input string is of a particular format.
   */
  confidence: (input: string) => number

  /**
   * A string which uniquely identifies this identity function.
   */
  id: string

  /**
   * Returns an array of converters supported by this identity.
   */
  converters: Converter[]
}
