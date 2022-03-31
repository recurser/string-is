import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useState,
} from 'react'
import { useRouter } from 'next/router'

import { Converter, NullConverter } from '@lib/converters'
import type { ConverterOptions } from '@lib/types'
import { hyphenateConverterId } from '@lib/utilities/String'

/**
 * Allows a specific input string and converter to be set.
 */
export type ForceInput =
  | [string, Converter]
  | [string, Converter, ConverterOptions]
  | undefined

interface Props {
  /**
   * The currently selected converter.
   */
  converter: Converter

  /**
   * Allows a specific input string and converter to be set.
   */
  forceInput: ForceInput

  /**
   * The string inputted by the user for conversion.
   */
  inputString: string

  /**
   * The output string after conversion.
   */
  outputString: string

  /**
   * Sets the current converter.
   */
  setConverter: Dispatch<Converter>

  /**
   * Sets the input string and converter that will be forced into use.
   */
  setForceInput: Dispatch<ForceInput>

  /**
   * Sets the input string that will be converted.
   */
  setInputString: Dispatch<string>

  /**
   * Sets the output string after conversion.
   */
  setOutputString: Dispatch<string>
}

const localStorageKey = 'string.is:RecentConverters'

/**
 * Returns an array of recently-used converter IDs.
 */
export const recentConverterIds = () =>
  JSON.parse(window.localStorage.getItem(localStorageKey) || '[]')

// Create the context object.
const Context = createContext<Props>({
  converter: NullConverter,
  forceInput: undefined,
  inputString: '',
  outputString: '',
  setConverter: (_: Converter) => undefined,
  setForceInput: (_: ForceInput) => undefined,
  setInputString: (_: string) => undefined,
  setOutputString: (_: string) => undefined,
})

/**
 * Returns a hook that allows us to reference context variables
 * from within components.
 */
export const useConverterContext = (): Props => {
  const {
    converter,
    forceInput,
    inputString,
    outputString,
    setConverter,
    setForceInput,
    setInputString,
    setOutputString,
  } = useContext(Context)
  const { push } = useRouter()

  const wrappedSetConverter = (cnvt: Converter) => {
    setConverter(cnvt)

    // Push the newly selected converter to URL history, and trigger a UI change to display it.
    if (cnvt.id !== NullConverter.id) {
      const slug = hyphenateConverterId(cnvt.id)
      push(slug, undefined, { shallow: false })
    }

    if (!cnvt.isHidden) {
      // Remember which converters were used most recently, so we can improve auto-selection.
      let recent = recentConverterIds()
      recent = recent.filter((converterId: string) => converterId != cnvt.id)
      recent.unshift(cnvt.id)
      window.localStorage.setItem(localStorageKey, JSON.stringify(recent))
    }
  }

  return {
    converter,
    forceInput,
    inputString,
    outputString,
    setConverter: wrappedSetConverter,
    setForceInput,
    setInputString,
    setOutputString,
  }
}

/**
 * Returns a context containing data about the current conversion input,
 * output and operations to be performed.
 */
export const ConverterContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [converter, setConverter] = useState<Converter>(NullConverter)
  const [forceInput, setForceInput] = useState<ForceInput>()
  const [inputString, setInputString] = useState<string>('')
  const [outputString, setOutputString] = useState<string>('')

  const value = {
    converter,
    forceInput,
    inputString,
    outputString,
    setConverter,
    setForceInput,
    setInputString,
    setOutputString,
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
