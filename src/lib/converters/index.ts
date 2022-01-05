import { ConverterOptions } from '@lib/types'

export * as Base64Decoder from '@lib/converters/Base64Decoder'
export * as Base64Encoder from '@lib/converters/Base64Encoder'
export * as CssFormatter from '@lib/converters/CssFormatter'
export * as CsvFormatter from '@lib/converters/CsvFormatter'
export * as CsvToJsonConverter from '@lib/converters/CsvToJsonConverter'
export * as CsvToYamlConverter from '@lib/converters/CsvToYamlConverter'
export * as HtmlFormatter from '@lib/converters/HtmlFormatter'
export * as JavaScriptFormatter from '@lib/converters/JavaScriptFormatter'
export * as JsonFormatter from '@lib/converters/JsonFormatter'
export * as JsonToCsvConverter from '@lib/converters/JsonToCsvConverter'
export * as JsonToYamlConverter from '@lib/converters/JsonToYamlConverter'
export * as JwtDecoder from '@lib/converters/JwtDecoder'
export * as LessFormatter from '@lib/converters/LessFormatter'
export * as LowerCaseConverter from '@lib/converters/LowerCaseConverter'
export * as MarkdownFormatter from '@lib/converters/MarkdownFormatter'
export * as Md5Encoder from '@lib/converters/Md5Encoder'
export * as NullConverter from '@lib/converters/NullConverter'
export * as NumberBaseConverter from '@lib/converters/NumberBaseConverter'
export * as QueryStringToJsonConverter from '@lib/converters/QueryStringToJsonConverter'
export * as QueryStringToYamlConverter from '@lib/converters/QueryStringToYamlConverter'
export * as RipemdEncoder from '@lib/converters/RipemdEncoder'
export * as ShaEncoder from '@lib/converters/ShaEncoder'
export * as ScssFormatter from '@lib/converters/ScssFormatter'
export * as TimestampConverter from '@lib/converters/TimestampConverter'
export * as UpperCaseConverter from '@lib/converters/UpperCaseConverter'
export * as UrlDecoder from '@lib/converters/UrlDecoder'
export * as UrlEncoder from '@lib/converters/UrlEncoder'
export * as XmlFormatter from '@lib/converters/XmlFormatter'
export * as YamlFormatter from '@lib/converters/YamlFormatter'
export * as YamlToJsonConverter from '@lib/converters/YamlToJsonConverter'

export interface Converter {
  id: string
  operation: (input: string, options?: ConverterOptions) => string
  outputId: string
}
