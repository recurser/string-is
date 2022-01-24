import { ConverterOptions } from '@lib/types'
import { output as cssOutput } from '@lib/outputs/CssOutput'

export const id = 'scss'

export const outputId = 'css'

export const operation = (
  input: string,
  options: ConverterOptions = {},
): string => {
  return cssOutput(input, options)
}
