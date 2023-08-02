import { isEmpty } from 'lodash'
import { parse } from 'chrono-node'

import { timezones } from '@lib/utilities/Timezones'

/**
 * Keywords that can trigger timestamp generation.
 */
const keywords = ['now', 'time', 'timestamp']

/**
 * Parses the given timestamp string into an object. The string
 * may contain a numeric timestamp, a keyword such as 'now', or
 * a human-readable date string such as 'last Tuesday'.
 *
 * @param data - the timestamp string to parse.
 *
 * @returns the parsed date object.
 */
export const input = (data: string): string | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  // Limit input to the first line, otherwise we tend to pick up random
  // timestamps from inside JSON etc.
  const filtered = data.split('\n').filter((line) => !isEmpty(line.trim()))
  // Only look at the first 100 characters - otherwise we pick up random
  // timestamps in JSON etc.
  const trimmed = (filtered[0] || '').trim().substring(0, 100)
  // Ignore timezones such as 'in JST' for now - we'll handle them later in the converter.
  const [_, withoutTimezone, timezone, _toTimezone] =
    trimmed.split(
      /^(.*?)(?: ([A-Z]{2,3}T|UTC))?(?: in ([A-Z]{2,3}T|UTC))?$/i,
    ) || null
  const final = withoutTimezone.toLocaleLowerCase()

  // Allow the user to trigger this with a keyword, and we'll
  // generate the timestamp for them.
  if (keywords.includes(final)) {
    return `${Date.now()}`
  } else if (
    // We assume the timestamp will start with '1'.
    /^1(\d{9}|\d{12})$/.test(final)
  ) {
    return final
  } else {
    // If the user has provided a timezone (eg. 3pm PST), interpret the
    // parsed date in terms of that timezone.
    let offset =
      timezone &&
      timezones.find((tz) => tz.shortcode === timezone?.toUpperCase())?.offset

    if (typeof offset === 'string') {
      offset = parseInt(offset, 10)
    }

    let result
    if (offset !== undefined) {
      result = parse(final, { timezone: (offset as number) * 60 })
    } else {
      result = parse(final)
    }

    if (result && result.length > 0) {
      const { start, text } = result[0]

      if (!start) {
        return undefined
      } else if (final.length / text.length <= 1.5) {
        // This is arbitrary, but if the extracted timestamp text doesn't make up
        // most of the string, it's probably not a timestamp.
        return `${start.date().getTime()}`
      }
    }
  }

  return undefined
}
