import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react'

import * as untypedOutputs from '@lib/outputs'
import type { Output } from '@lib/outputs'
import { ConverterOptions } from '@lib/types'

type NamespacedOptions = Record<string, ConverterOptions>

interface ConverterOptionsProps {
  options: NamespacedOptions
  setOptions: (opts: NamespacedOptions) => void
}

interface NamespacedProps {
  options: ConverterOptions
  setOptions: (opts: ConverterOptions) => void
}

const outputs = untypedOutputs as unknown as Record<string, Output>
const defaults = Object.fromEntries(
  Object.keys(outputs).map((key) => {
    const output = outputs[key]
    return [output.id, output.defaultOptions || {}]
  }),
)

const Context = createContext<ConverterOptionsProps>({
  options: defaults,
  setOptions: (_opts: NamespacedOptions) => undefined,
})

export const useConverterOptionsContext = (
  namespace: string,
): NamespacedProps => {
  const { options, setOptions } = useContext(Context)

  const wrappedSetOptions = (opts: ConverterOptions) => {
    setOptions({ ...options, [namespace]: opts })
  }

  return {
    options: (options[namespace] as unknown as ConverterOptions) || {},
    setOptions: wrappedSetOptions,
  }
}

export const ConverterOptionsContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [options, setOptions] = useState<NamespacedOptions>(defaults)

  const value = { options, setOptions }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
