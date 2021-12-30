import dayjs, { Dayjs, extend } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { ConverterOptions } from '@lib/types'

extend(relativeTime)
extend(utc)
extend(timezone)

export const defaultOptions = {
  format: 'YYYY-MM-DD HH:mm',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
}

export const id = 'datetime'

const parse = (input: string, timezone: string): Dayjs => {
  const multiplier = input.length === 10 ? 1000 : 1
  const datetime = new Date(parseInt(input, 10) * multiplier)
  if (isNaN(datetime.getTime())) {
    throw new Error('The input is not a valid timestamp')
  }

  return dayjs(datetime).tz(timezone)
}

export const output = (input: string, options: ConverterOptions): string => {
  return parse(input, options.timezone as string).format(
    options.format as string,
  )
}

export const relativeOutput = (
  input: string,
  options: ConverterOptions,
): string => {
  try {
    const date = parse(input, options.timezone as string)

    return dayjs().to(date)
  } catch (err) {
    return ''
  }
}

export const utcOutput = (input: string, options: ConverterOptions): string => {
  try {
    return parse(input, 'UTC').format(options.format as string)
  } catch (err) {
    return ''
  }
}
