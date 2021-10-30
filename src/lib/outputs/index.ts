export * as Base64DecodeOutput from '@lib/outputs/Base64DecodeOutput'
export * as Base64EncodeOutput from '@lib/outputs/Base64EncodeOutput'
export * as CsvToYamlOutput from '@lib/outputs/CsvToYamlOutput'
export * as HtmlOutput from '@lib/outputs/HtmlOutput'
export * as JsonOutput from '@lib/outputs/JsonOutput'
export * as JsonToCsvOutput from '@lib/outputs/JsonToCsvOutput'
export * as JsonToYamlOutput from '@lib/outputs/JsonToYamlOutput'
export * as UrlDecodeOutput from '@lib/outputs/UrlDecodeOutput'
export * as UrlEncodeOutput from '@lib/outputs/UrlEncodeOutput'
export * as YamlOutput from '@lib/outputs/YamlOutput'
export * as YamlToJsonOutput from '@lib/outputs/YamlToJsonOutput'

export interface Output {
  eligible?: (input: string) => boolean
  id: string
  operation: (input: string) => string
  overrides: string[]
}
