import { isEmpty } from 'lodash'

import { Converter, MarkdownFormatter } from '@lib/converters'

export const id = 'markdown'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (
    // Link - we can be pretty confident if we encounter this. It also
    // matches images, which have a `!` at the beginning.
    // See https://davidwells.io/snippets/regex-match-markdown-links
    /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d\.\/?=#]+)\)/gm.test(input)
  ) {
    return 100
  } else if (
    // Heading - one or more hashes at the start of a line followed by text.
    /^#{1,4}\s.+$/gm.test(input)
  ) {
    return 100
  } else if (
    // Strikethrough.
    /^~~.+~~$/gm.test(input)
  ) {
    return 100
  }

  return 0
}

export const converters = [MarkdownFormatter] as Converter[]
