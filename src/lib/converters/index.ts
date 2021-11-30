import { ConverterOptions } from '@lib/types'

export * as Base64DecodeConverter from '@lib/converters/Base64DecodeConverter'
export * as Base64EncodeConverter from '@lib/converters/Base64EncodeConverter'
export * as CsvConverter from '@lib/converters/CsvConverter'
export * as CsvToJsonConverter from '@lib/converters/CsvToJsonConverter'
export * as CsvToYamlConverter from '@lib/converters/CsvToYamlConverter'
export * as HtmlConverter from '@lib/converters/HtmlConverter'
export * as JsonConverter from '@lib/converters/JsonConverter'
export * as JsonToCsvConverter from '@lib/converters/JsonToCsvConverter'
export * as JsonToYamlConverter from '@lib/converters/JsonToYamlConverter'
export * as LowerCaseConverter from '@lib/converters/LowerCaseConverter'
export * as Md5Converter from '@lib/converters/Md5Converter'
export * as NullConverter from '@lib/converters/NullConverter'
export * as NumberBaseConverter from '@lib/converters/NumberBaseConverter'
export * as QueryStringToJsonConverter from '@lib/converters/QueryStringToJsonConverter'
export * as QueryStringToYamlConverter from '@lib/converters/QueryStringToYamlConverter'
export * as RipemdConverter from '@lib/converters/RipemdConverter'
export * as ShaConverter from '@lib/converters/ShaConverter'
export * as TimestampConverter from '@lib/converters/TimestampConverter'
export * as UpperCaseConverter from '@lib/converters/UpperCaseConverter'
export * as UrlDecodeConverter from '@lib/converters/UrlDecodeConverter'
export * as UrlEncodeConverter from '@lib/converters/UrlEncodeConverter'
export * as XmlConverter from '@lib/converters/XmlConverter'
export * as YamlConverter from '@lib/converters/YamlConverter'
export * as YamlToJsonConverter from '@lib/converters/YamlToJsonConverter'

export interface Converter {
  id: string
  operation: (input: string, options?: ConverterOptions) => string | undefined
  outputId: string
}
