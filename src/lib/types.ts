import { TextareaProps } from 'evergreen-ui'

import { Converter } from '@lib/converters'

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
  input: string
}
