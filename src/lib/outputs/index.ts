import type { ConverterOptions, Obj } from '@lib/types'

export * as CssOutput from '@lib/outputs/CssOutput'
export * as CsvOutput from '@lib/outputs/CsvOutput'
export * as DatetimeOutput from '@lib/outputs/DatetimeOutput'
export * as DiffOutput from '@lib/outputs/DiffOutput'
export * as HtmlOutput from '@lib/outputs/HtmlOutput'
export * as JavaScriptOutput from '@lib/outputs/JavaScriptOutput'
export * as JsonOutput from '@lib/outputs/JsonOutput'
export * as LessOutput from '@lib/outputs/LessOutput'
export * as LowerCaseOutput from '@lib/outputs/LowerCaseOutput'
export * as MarkdownOutput from '@lib/outputs/MarkdownOutput'
export * as Md5Output from '@lib/outputs/Md5Output'
export * as NumberBaseOutput from '@lib/outputs/NumberBaseOutput'
export * as RegexOutput from '@lib/outputs/RegexOutput'
export * as RipemdOutput from '@lib/outputs/RipemdOutput'
export * as ShaOutput from '@lib/outputs/ShaOutput'
export * as SqlOutput from '@lib/outputs/SqlOutput'
export * as TomlOutput from '@lib/outputs/TomlOutput'
export * as UpperCaseOutput from '@lib/outputs/UpperCaseOutput'
export * as UuidOutput from '@lib/outputs/UuidOutput'
export * as XmlOutput from '@lib/outputs/XmlOutput'
export * as YamlOutput from '@lib/outputs/YamlOutput'

export interface Output {
  /**
   * The default options used to format the input string,
   * if no user-defined options were provided.
   */
  defaultOptions?: ConverterOptions

  /**
   * A string which uniquely identifies the output function.
   */
  id: string

  /**
   * Converts the given input object to a string, using the
   * given converter options.
   */
  output: (input: Obj, options: ConverterOptions) => string
}
