import { Converter } from 'showdown'

import { ConverterOptions } from '@lib/types'
import { output as htmlOutput } from '@lib/outputs/HtmlOutput'

export const id = 'markdownToHtml'

export const outputId = 'html'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  const converter = new Converter({ noHeaderId: true, strikethrough: true })
  const html = converter.makeHtml(input)

  return htmlOutput(html, options)
}
