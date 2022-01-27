import { isEmpty } from 'lodash'

// A regex to strip line breaks.
const regex = /\r?\n|\r/gm

// Keywords that can trigger timestamp generation.
const keywords = ['now', 'time', 'timestamp']

export const input = (data: string): string | undefined => {
  if (isEmpty(data)) {
    return undefined
  }

  const trimmed = data.replace(regex, ' ').trim().toLocaleLowerCase()

  // Allow the user to trigger this with a keyword, and we'll
  // generate the timestamp for them.
  if (keywords.includes(trimmed)) {
    return `${Date.now()}`
  } else if (
    // We assume the timestamp will start with '1'.
    /^1(\d{9}|\d{12})$/.test(trimmed)
  ) {
    return trimmed
  }

  return undefined
}
