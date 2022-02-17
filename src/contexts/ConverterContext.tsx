import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  createContext,
  useContext,
  useState,
} from 'react'

import { Converter, NullConverter } from '@lib/converters'
import { useAnalytics } from '@services/Analytics'

interface Props {
  /**
   * A state flag that indicates that the currently selected
   * converter should be unset.
   */
  clearConverter: boolean

  /**
   * The currently selected converter.
   */
  converter: Converter

  /**
   * The string inputted by the user for conversion.
   */
  inputString: string

  /**
   * The output string after conversion.
   */
  outputString: string

  /**
   * Sets the state flag to trigger clearing of the currently
   * selected converter.
   */
  setClearConverter: Dispatch<boolean>

  /**
   * Sets the current converter.
   */
  setConverter: Dispatch<Converter>

  /**
   * Sets the input string that will be converted.
   */
  setInputString: Dispatch<string>

  /**
   * Sets the output string after conversion.
   */
  setOutputString: Dispatch<string>

  /**
   * Sets the state flag to shift the converted output string
   * into the input box.
   */
  setUseOutput: Dispatch<boolean>

  /**
   * A state flag that indicates that the converted output string
   * should be shigted into the input box.
   */
  useOutput: boolean
}

const localStorageKey = 'string.is:RecentConverters'

/**
 * Returns an array of recently-used converter IDs.
 */
export const recentConverterIds = () =>
  JSON.parse(window.localStorage.getItem(localStorageKey) || '[]')

// Create the context object.
const Context = createContext<Props>({
  clearConverter: false,
  converter: NullConverter,
  inputString: '',
  outputString: '',
  setClearConverter: (_: boolean) => undefined,
  setConverter: (_: Converter) => undefined,
  setInputString: (_: string) => undefined,
  setOutputString: (_: string) => undefined,
  setUseOutput: (_: boolean) => undefined,
  useOutput: false,
})

/**
 * Returns a hook that allows us to reference context variables
 * from within components.
 */
export const useConverterContext = (): Props => {
  const {
    clearConverter,
    converter,
    inputString,
    outputString,
    setClearConverter,
    setConverter,
    setInputString,
    setOutputString,
    setUseOutput,
    useOutput,
  } = useContext(Context)
  const analytics = useAnalytics()

  const wrappedSetConverter = (cnvt: Converter) => {
    setConverter(cnvt)

    if (cnvt.id !== NullConverter.id) {
      // Track which converter has been selected, to find out which are useful.
      analytics('Convert', {
        props: {
          converter: cnvt.id,
        },
      })

      // Remember which converters were used most recently, so we can improve auto-selection.
      let recent = recentConverterIds()
      recent = recent.filter((converterId: string) => converterId != cnvt.id)
      recent.unshift(cnvt.id)
      window.localStorage.setItem(localStorageKey, JSON.stringify(recent))
    }
  }

  return {
    clearConverter,
    converter,
    inputString,
    outputString,
    setClearConverter,
    setConverter: wrappedSetConverter,
    setInputString,
    setOutputString,
    setUseOutput,
    useOutput,
  }
}

/**
 * Returns a context containing data about the current conversion input,
 * output and operations to be performed.
 */
export const ConverterContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [clearConverter, setClearConverter] = useState<boolean>(false)
  const [converter, setConverter] = useState<Converter>(NullConverter)
  const [inputString, setInputString] = useState<string>('')
  const [outputString, setOutputString] = useState<string>('')
  const [useOutput, setUseOutput] = useState<boolean>(false)

  const value = {
    clearConverter,
    converter,
    inputString,
    outputString,
    setClearConverter,
    setConverter,
    setInputString,
    setOutputString,
    setUseOutput,
    useOutput,
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
