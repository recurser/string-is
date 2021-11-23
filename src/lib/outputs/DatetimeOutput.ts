import dayjs, { extend } from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { ConverterOptions } from '@lib/types'

extend(utc)
extend(timezone)

export const defaultOptions = {
  format: 'YYYY-MM-DD HH:mm:ss',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
}

export const id = 'datetime'

export const output = (input: Date, options: ConverterOptions): string => {
  return dayjs(input)
    .tz(options.timezone as string)
    .format(options.format as string)
}
