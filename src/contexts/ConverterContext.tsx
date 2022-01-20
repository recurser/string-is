import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react'

import { Converter, NullConverter } from '@lib/converters'
import { useAnalytics } from '@services/Analytics'

interface Props {
  clearConverter: boolean
  converter: Converter
  inputString: string
  outputString: string
  setClearConverter: Dispatch<boolean>
  setConverter: Dispatch<Converter>
  setInputString: Dispatch<string>
  setOutputString: Dispatch<string>
  setUseOutput: Dispatch<boolean>
  useOutput: boolean
}

const localStorageKey = 'string.is:RecentConverters'

// Returns an array of recently-used converter IDs.
export const recentConverterIds = () =>
  JSON.parse(window.localStorage.getItem(localStorageKey) || '[]')

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
