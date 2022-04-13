import type { ConverterOptions } from '@lib/types'

export * as Base64Decoder from '@lib/converters/Base64Decoder'
export * as Base64Encoder from '@lib/converters/Base64Encoder'
export * as CssFormatter from '@lib/converters/CssFormatter'
export * as CsvFormatter from '@lib/converters/CsvFormatter'
export * as CsvToJsonConverter from '@lib/converters/CsvToJsonConverter'
export * as CsvToXmlConverter from '@lib/converters/CsvToXmlConverter'
export * as CsvToYamlConverter from '@lib/converters/CsvToYamlConverter'
export * as HtmlFormatter from '@lib/converters/HtmlFormatter'
export * as JavaScriptFormatter from '@lib/converters/JavaScriptFormatter'
export * as JsonFormatter from '@lib/converters/JsonFormatter'
export * as JsonToCsvConverter from '@lib/converters/JsonToCsvConverter'
export * as JsonToJavaScriptConverter from '@lib/converters/JsonToJavaScriptConverter'
export * as JsonToTomlConverter from '@lib/converters/JsonToTomlConverter'
export * as JsonToXmlConverter from '@lib/converters/JsonToXmlConverter'
export * as JsonToYamlConverter from '@lib/converters/JsonToYamlConverter'
export * as JwtDecoder from '@lib/converters/JwtDecoder'
export * as LessFormatter from '@lib/converters/LessFormatter'
export * as LowerCaseConverter from '@lib/converters/LowerCaseConverter'
export * as MarkdownFormatter from '@lib/converters/MarkdownFormatter'
export * as MarkdownToHtmlConverter from '@lib/converters/MarkdownToHtmlConverter'
export * as Md5Encoder from '@lib/converters/Md5Encoder'
export * as NullConverter from '@lib/converters/NullConverter'
export * as NumberBaseConverter from '@lib/converters/NumberBaseConverter'
export * as QueryStringToJsonConverter from '@lib/converters/QueryStringToJsonConverter'
export * as QueryStringToYamlConverter from '@lib/converters/QueryStringToYamlConverter'
export * as RegexDebugger from '@lib/converters/RegexDebugger'
export * as RipemdEncoder from '@lib/converters/RipemdEncoder'
export * as ScssFormatter from '@lib/converters/ScssFormatter'
export * as ShaEncoder from '@lib/converters/ShaEncoder'
export * as SqlFormatter from '@lib/converters/SqlFormatter'
export * as TimestampConverter from '@lib/converters/TimestampConverter'
export * as TomlFormatter from '@lib/converters/TomlFormatter'
export * as TomlToJsonConverter from '@lib/converters/TomlToJsonConverter'
export * as TomlToXmlConverter from '@lib/converters/TomlToXmlConverter'
export * as TomlToYamlConverter from '@lib/converters/TomlToYamlConverter'
export * as UpperCaseConverter from '@lib/converters/UpperCaseConverter'
export * as UrlDecoder from '@lib/converters/UrlDecoder'
export * as UrlEncoder from '@lib/converters/UrlEncoder'
export * as UuidGenerator from '@lib/converters/UuidGenerator'
export * as XmlFormatter from '@lib/converters/XmlFormatter'
export * as XmlToJsonConverter from '@lib/converters/XmlToJsonConverter'
export * as XmlToTomlConverter from '@lib/converters/XmlToTomlConverter'
export * as XmlToYamlConverter from '@lib/converters/XmlToYamlConverter'
export * as YamlFormatter from '@lib/converters/YamlFormatter'
export * as YamlToJsonConverter from '@lib/converters/YamlToJsonConverter'
export * as YamlToXmlConverter from '@lib/converters/YamlToXmlConverter'

export interface Converter {
  /**
   * A string which uniquely identifies this converter.
   */
  id: string

  /**
   * If true, this converter is hidden from display in the UI.
   */
  isHidden?: boolean

  /**
   * An operation on the input string, with the given
   * options, that returns a converted output.
   */
  operation: (input: string, options?: ConverterOptions) => string

  /**
   * A string which uniquely identifies the output component used by
   * this converter.
   */
  outputId: string
}
