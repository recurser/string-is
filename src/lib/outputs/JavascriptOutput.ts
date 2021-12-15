import parserBabel from 'prettier/parser-babel'
import { format } from 'prettier/standalone'

import { ConverterOptions } from '@lib/types'

export const defaultOptions = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
}

export const id = 'javascript'

export const error = (input: string) => {
  try {
    format(input, { parser: 'babel', plugins: [parserBabel] })
  } catch (err) {
    return (err as Error).message
  }

  return undefined
}

export const output = (
  input: string,
  options: ConverterOptions = {},
): string => {
  if (true) {
    try {
      return format(input, {
        ...defaultOptions,
        ...options,
        parser: 'babel',
        plugins: [parserBabel],
      })
    } catch (err) {
      return input
    }
  }
}
