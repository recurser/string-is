import { TextareaProps } from 'evergreen-ui'

import { Converter } from '@lib/converters'

declare global {
  interface Window {
    /**
     * The Plausible Analytics global event tracking function.
     */
    plausible: (event: string | number | symbol, params: unknown) => void
  }
}

/**
 * Standard type which we use to refer to 'dictionary' objects
 * such as parsed JSON or YAML.
 */
export type Obj =
  | Record<string, unknown>
  | Record<string, unknown>[]
  | unknown[]

/**
 * Standard type which we use to define converter settings.
 */
export type ConverterOptions = Record<
  string,
  boolean | number | string | undefined
>

export interface OutputProps extends TextareaProps {
  /**
   * The converter module used to convert output.
   */
  converter: Converter

  /**
   * True if this output should be marked disabled, false otherwise.
   */
  disabled?: boolean

  /**
   * The raw input string before conversion.
   */
  input: string

  /**
   * The formatted output string after conversion.
   */
  output: string
}
