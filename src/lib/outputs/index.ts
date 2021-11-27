import { ConverterOptions, Obj } from '@lib/types'

export * as CsvOutput from '@lib/outputs/CsvOutput'
export * as DatetimeOutput from '@lib/outputs/DatetimeOutput'
export * as HtmlOutput from '@lib/outputs/HtmlOutput'
export * as JsonOutput from '@lib/outputs/JsonOutput'
export * as LowerCaseOutput from '@lib/outputs/LowerCaseOutput'
export * as Md5Output from '@lib/outputs/Md5Output'
export * as NumberBaseOutput from '@lib/outputs/NumberBaseOutput'
export * as RipemdOutput from '@lib/outputs/RipemdOutput'
export * as ShaOutput from '@lib/outputs/ShaOutput'
export * as UpperCaseOutput from '@lib/outputs/UpperCaseOutput'
export * as YamlOutput from '@lib/outputs/YamlOutput'

export interface Output {
  defaultOptions?: ConverterOptions
  id: string
  output: (input: Obj, options: ConverterOptions) => string
}
