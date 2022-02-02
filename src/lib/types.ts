import { TextareaProps } from 'evergreen-ui'

import { Converter } from '@lib/converters'

declare global {
  interface Window {
    plausible: (event: string | number | symbol, params: unknown) => void
  }
}

export type Obj =
  | Record<string, unknown>
  | Record<string, unknown>[]
  | unknown[]

export type ConverterOptions = Record<
  string,
  boolean | number | string | undefined
>

export interface OutputProps extends TextareaProps {
  converter: Converter
  disabled?: boolean
  input: string
  output: string
}
