import { output as cssOutput } from '@lib/outputs/CssOutput'
import { ConverterOptions } from '@lib/types'

export const id = 'scss'

export const outputId = 'css'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return cssOutput(input, options)
}
