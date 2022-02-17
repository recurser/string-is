import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import * as untypedOutputs from '@lib/outputs'
import { ConverterOptions } from '@lib/types'
import type { Output } from '@lib/outputs'

/**
 * The 'namespaced' options are a dictionary containing
 * an options object for (potentially) each converter.
 *
 * We don't access it directly from outside this context,
 * but it acts as the main options state store.
 */
type NamespacedOptions = Record<string, ConverterOptions>

const localStorageKey = 'string.is:Preferences'

interface ConverterOptionsProps {
  /**
   * A state store containing a dictionary of options for multiple
   * conversion modules.
   */
  options: NamespacedOptions

  /**
   * A state-setter allowing us to set the options for multiple
   * converter namespaces.
   */
  setOptions: Dispatch<NamespacedOptions>
}

interface NamespacedProps {
  /**
   * A state store containing options supported by the conversion
   * module.
   */
  options: ConverterOptions

  /**
   * A state-setter allowing us to set the options for a specific
   * namespace.
   */
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

// Create the context object.
const Context = createContext<ConverterOptionsProps>({
  options: prefs,
  setOptions: (_opts: NamespacedOptions) => undefined,
})

/**
 * Returns a hook that allows us to reference context variables
 * from within components.
 *
 * It takes a converter namespace as an argument, and returns a
 * 'wrapped' setter that abstracts away the namespacing and
 * simplifies setting of options for a specific converter.
 */
export const useConverterOptionsContext = (
  namespace: string,
): NamespacedProps => {
  const { options, setOptions } = useContext(Context)

  // Return a setter that only operates on the given namespace.
  const wrappedSetOptions = useCallback(
    (opts: ConverterOptions) => {
      const merged = {
        ...options,
        [namespace]: { ...options[namespace], ...opts },
      }
      setOptions(merged)
      window.localStorage.setItem(localStorageKey, JSON.stringify(merged))
    },
    [namespace, options, setOptions],
  )

  // Initialize the current namespace if it's undefined.
  useEffect(() => {
    if (!options[namespace]) {
      wrappedSetOptions({})
    }
  }, [namespace, options, wrappedSetOptions])

  return {
    options: (options[namespace] as unknown as ConverterOptions) || {},
    setOptions: wrappedSetOptions,
  }
}

/**
 * Returns a context containing data about the conversion options. This
 * is based on default options, and any previously selected settings
 * from local storage.
 */
export const ConverterOptionsContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [options, setOptions] = useState<NamespacedOptions>(prefs)

  const value = { options, setOptions }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
