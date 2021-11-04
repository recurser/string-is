import { CsvOutput } from '@components/domain/convert/outputs/CsvOutput'
import { HtmlOutput } from '@components/domain/convert/outputs/HtmlOutput'
import { JsonOutput } from '@components/domain/convert/outputs/JsonOutput'
import { PlainOutput } from '@components/domain/convert/outputs/PlainOutput'
import { YamlOutput } from '@components/domain/convert/outputs/YamlOutput'

export type OutputName =
  | 'CsvOutput'
  | 'HtmlOutput'
  | 'JsonOutput'
  | 'PlainOutput'
  | 'YamlOutput'

export const outputs = {
  CsvOutput,
  HtmlOutput,
  JsonOutput,
  PlainOutput,
  YamlOutput,
}
