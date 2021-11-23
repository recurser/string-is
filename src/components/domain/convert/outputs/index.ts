import { CsvOutput } from '@components/domain/convert/outputs/CsvOutput'
import { DatetimeOutput } from '@components/domain/convert/outputs/DatetimeOutput'
import { HtmlOutput } from '@components/domain/convert/outputs/HtmlOutput'
import { JsonOutput } from '@components/domain/convert/outputs/JsonOutput'
import { PlainOutput } from '@components/domain/convert/outputs/PlainOutput'
import { ShaOutput } from '@components/domain/convert/outputs/ShaOutput'
import { YamlOutput } from '@components/domain/convert/outputs/YamlOutput'

export type OutputName =
  | 'CsvOutput'
  | 'DatetimeOutput'
  | 'HtmlOutput'
  | 'JsonOutput'
  | 'PlainOutput'
  | 'YamlOutput'

export const outputs = {
  CsvOutput,
  DatetimeOutput,
  HtmlOutput,
  JsonOutput,
  PlainOutput,
  ShaOutput,
  YamlOutput,
}
