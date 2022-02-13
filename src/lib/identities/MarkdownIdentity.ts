import { isEmpty } from 'lodash'

import { Converter, MarkdownFormatter } from '@lib/converters'

/**
 * A string which uniquely identifies this identity function.
 */
export const id = 'markdown'

/**
 * Returns a numeric confidence between 0 and 100 indicating how
 * likely it is that the given string is Markdown.
 *
 * @param input - the input string whose format we want to determine.
 *
 * @returns a numeric confidence between 0 and 100.
 */
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
    /~~.+~~/gm.test(input)
  ) {
    return 100
  }

  return 0
}

/**
 * Returns an array of converters supported by this identity.
 */
export const converters = [MarkdownFormatter] as Converter[]
