import { ConverterOptions } from '@lib/types'

export * as Base64DecodeConverter from '@lib/converters/Base64DecodeConverter'
export * as Base64EncodeConverter from '@lib/converters/Base64EncodeConverter'
export * as CsvToYamlConverter from '@lib/converters/CsvToYamlConverter'
export * as CsvToJsonConverter from '@lib/converters/CsvToJsonConverter'
export * as HtmlConverter from '@lib/converters/HtmlConverter'
export * as JsonConverter from '@lib/converters/JsonConverter'
export * as JsonToCsvConverter from '@lib/converters/JsonToCsvConverter'
export * as JsonToYamlConverter from '@lib/converters/JsonToYamlConverter'
export * as Md5Converter from '@lib/converters/Md5Converter'
export * as RipemdConverter from '@lib/converters/RipemdConverter'
export * as ShaConverter from '@lib/converters/ShaConverter'
export * as UrlDecodeConverter from '@lib/converters/UrlDecodeConverter'
export * as UrlEncodeConverter from '@lib/converters/UrlEncodeConverter'
export * as YamlConverter from '@lib/converters/YamlConverter'
export * as YamlToJsonConverter from '@lib/converters/YamlToJsonConverter'

export interface Converter {
  eligible?: (input: string) => boolean
  id: string
  operation: (input: string, options?: ConverterOptions) => string
  outputId: string
  overrides: string[]
}
