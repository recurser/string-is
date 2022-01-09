import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react'

import { Converter, NullConverter } from '@lib/converters'

interface Props {
  converter: Converter
  setConverter: Dispatch<Converter>
}

const Context = createContext<Props>({
  converter: NullConverter,
  setConverter: (_: Converter) => undefined,
})

export const useConverterContext = (): Props => useContext(Context)

export const ConverterContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [converter, setConverter] = useState<Converter>(NullConverter)

  const value = { converter, setConverter }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
