import { Converter } from 'showdown'

import type { ConverterOptions } from '@lib/types'
import { output as htmlOutput } from '@lib/outputs/HtmlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'markdownToHtmlConverter'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'html'

/**
 * An operation that converts the given Markdown string to HTML.
 *
 * @param input   - the string to convert.
 * @param options - options that control the conversion process.
 *
 * @returns the converted string.
 */
export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const converter = new Converter({ noHeaderId: true, strikethrough: true })
  const html = converter.makeHtml(input)

  return htmlOutput(html, options)
}
