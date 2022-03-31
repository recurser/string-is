import dayjs, { Dayjs, extend } from 'dayjs'
import { isEmpty } from 'lodash'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import type { ConverterOptions } from '@lib/types'
import { input as timestampInput } from '@lib/inputs/TimestampInput'

extend(relativeTime)
extend(utc)
extend(timezone)

/**
 * The default options used to format timestamp strings,
 * if no user-defined options were provided.
 */
export const defaultOptions = {
  format: 'YYYY-MM-DD HH:mm',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
}

/**
 * A string which uniquely identifies this output function.
 */
export const id = 'datetime'

/**
 * Parses the given input string as a datetime, and returns
 * a Date object in the given timezone.
 *
 * @param input    - The date or time string to parse.
 * @param timezone - The timezone to return the Date object in.
 *
 * @returns a Date object in the requested timezone.
 */
const parse = (input: string, timezone: string): Dayjs => {
  const timestamp = timestampInput(input) || ''
  const multiplier = timestamp.length === 10 ? 1000 : 1
  const datetime = new Date(parseInt(timestamp, 10) * multiplier)
  if (isNaN(datetime.getTime())) {
    throw new Error('The input is not a valid timestamp')
  }

  return dayjs(datetime).tz(timezone)
}

/**
 * Converts the given input string to a formatted time string.
 *
 * @param input   - The string to parse and convert to a formatted time.
 * @param options - An options object containing the timezeone
 *                  and format information.
 *
 * @returns the formatted time string.
 */
export const output = (input: string, options: ConverterOptions): string => {
  if (isEmpty(input)) {
    return ''
  }

  const { format, timezone } = { ...defaultOptions, ...options }
  return parse(input, timezone as string).format(format as string)
}

/**
 * Converts the given input string to a time relative to 'now'.
 *
 * Eg. '5 minutes ago'
 *
 * @param input   - The string to parse and convert to a formatted time.
 * @param options - An options object containing the timezeone information.
 *
 * @returns the relative time string.
 */
export const relativeOutput = (
  input: string,
  options: ConverterOptions,
): string => {
  try {
    const { timezone } = { ...defaultOptions, ...options }
    const date = parse(input, timezone as string)

    return dayjs().to(date)
  } catch (err) {
    return ''
  }
}

/**
 * Converts the given input string to a Unix timestamp.
 *
 * Eg. '1644418060'
 *
 * @param input - The string to parse and convert to a timestamp.
 *
 * @returns the Unix timestamp.
 */
export const timestampOutput = (input: string): string => {
  try {
    return parse(input, 'UTC').unix().toString()
  } catch (err) {
    return ''
  }
}

/**
 * Converts the given input string to a formatted time string, in UTC.
 *
 * @param input   - The string to parse and convert to a formatted time.
 * @param options - An options object containing the format information.
 *
 * @returns the formatted UTC time string.
 */
export const utcOutput = (input: string, options: ConverterOptions): string => {
  try {
    const { format } = { ...defaultOptions, ...options }
    return parse(input, 'UTC').format(format as string)
  } catch (err) {
    return ''
  }
}
