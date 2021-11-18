import { ConverterOptions, Obj } from '@lib/types'

export * as CsvOutput from '@lib/outputs/CsvOutput'
export * as HtmlOutput from '@lib/outputs/HtmlOutput'
export * as JsonOutput from '@lib/outputs/JsonOutput'
export * as Md5Output from '@lib/outputs/Md5Output'
export * as RipemdOutput from '@lib/outputs/RipemdOutput'
export * as ShaOutput from '@lib/outputs/ShaOutput'
export * as YamlOutput from '@lib/outputs/YamlOutput'

export interface Output {
  defaultOptions?: ConverterOptions
  id: string
  output: (input: Obj, options: ConverterOptions) => string
}
