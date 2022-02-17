import { isEmpty } from 'lodash'
import { parseDate } from 'chrono-node'

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
  const trimmed = (filtered[0] || '').trim().toLocaleLowerCase()

  // Allow the user to trigger this with a keyword, and we'll
  // generate the timestamp for them.
  if (keywords.includes(trimmed)) {
    return `${Date.now()}`
  } else if (
    // We assume the timestamp will start with '1'.
    /^1(\d{9}|\d{12})$/.test(trimmed)
  ) {
    return trimmed
  } else {
    const parsed = parseDate(trimmed)
    if (parsed) {
      return `${parsed.getTime()}`
    }
  }

  return undefined
}
