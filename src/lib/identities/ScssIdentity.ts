import { isEmpty } from 'lodash'

import { Converter, ScssFormatter } from '@lib/converters'

export const id = 'scss'

export const confidence = (input: string) => {
  if (isEmpty(input)) {
    return 0
  }

  if (
    // We must have at least a word with opening and closing brackets, with a semicolon inside.
    // ([\.#]?[^{\s]+) : Anything that's not a space or a '{'
    // [\s]*           : Optional spaces before the '{ ... }'
    // {               : Open the brackets.
    // [^\:]+:         : Anything that's not a ':', followed by a ':'.
    // [^;]+;          : Anything that's not a ';', followed by a ';'.
    // (.|\s)*         : Any number of characters / spaces / line breaks.
    // [{}](.|\s)*     : An extra bracket nested inside somewhere. <-- THIS IS THE ONLY DIFFERENCE FROM THE CSS REGEX.
    // }               : The closing bracket.
    !/([\.#]?[^{\s]+)[\s]*{[^\:]+:[^;]+;(.|\s)*[{}](.|\s)*}/gm.test(
      input.trim(),
    )
  ) {
    return 0
  }

  return 100
}

export const converters = [ScssFormatter] as Converter[]
