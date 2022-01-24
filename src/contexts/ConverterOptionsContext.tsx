import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useState,
} from 'react'

import * as untypedOutputs from '@lib/outputs'
import { ConverterOptions } from '@lib/types'
import type { Output } from '@lib/outputs'

type NamespacedOptions = Record<string, ConverterOptions>

const localStorageKey = 'string.is:Preferences'

interface ConverterOptionsProps {
  options: NamespacedOptions
  setOptions: Dispatch<NamespacedOptions>
}

interface NamespacedProps {
  options: ConverterOptions
  setOptions: Dispatch<ConverterOptions>
}

// Create a map of default option settings for each output.
const outputs = untypedOutputs as unknown as Record<string, Output>
const defaults = Object.fromEntries(
  Object.keys(outputs).map((key) => {
    const output = outputs[key]
    return [output.id, output.defaultOptions || {}]
  }),
)

// Get any preferences stored in LocalStorage.
let locals
try {
  locals = JSON.parse(window.localStorage.getItem(localStorageKey) || '{}')
} catch (_err) {
  locals = {}
}

// Merge the defaults with the locally stored preferences.
const prefs = { ...defaults, ...locals } as NamespacedOptions

const Context = createContext<ConverterOptionsProps>({
  options: prefs,
  setOptions: (_opts: NamespacedOptions) => undefined,
})

export const useConverterOptionsContext = (
  namespace: string,
): NamespacedProps => {
  const { options, setOptions } = useContext(Context)

  const wrappedSetOptions = (opts: ConverterOptions) => {
    const merged = {
      ...options,
      [namespace]: { ...options[namespace], ...opts },
    }
    setOptions(merged)
    window.localStorage.setItem(localStorageKey, JSON.stringify(merged))
  }

  return {
    options: (options[namespace] as unknown as ConverterOptions) || {},
    setOptions: wrappedSetOptions,
  }
}

export const ConverterOptionsContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [options, setOptions] = useState<NamespacedOptions>(prefs)

  const value = { options, setOptions }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
