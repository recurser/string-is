import { Converter } from 'showdown'

import { ConverterOptions } from '@lib/types'
import { output as htmlOutput } from '@lib/outputs/HtmlOutput'

/**
 * A string which uniquely identifies this operation.
 */
export const id = 'markdownToHtml'

/**
 * A string which uniquely identifies the output component used by
 * this converter.
 */
export const outputId = 'html'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const converter = new Converter({ noHeaderId: true, strikethrough: true })
  const html = converter.makeHtml(input)

  return htmlOutput(html, options)
}
