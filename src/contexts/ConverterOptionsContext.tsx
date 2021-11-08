import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react'

import { ConverterOptions } from '@lib/types'

interface ConverterOptionsProps {
  options: Record<string, ConverterOptions>
  setOptions: (namespace: string, opts: ConverterOptions) => void
}

const Context = createContext<ConverterOptionsProps>({
  options: {},
  setOptions: (_namespace: string, _opts: ConverterOptions) => undefined,
})

export const useConverterOptionsContext = (): ConverterOptionsProps =>
  useContext(Context)

export const ConverterOptionsContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [options, setOptions] = useState<Record<string, ConverterOptions>>({})

  const wrapperSetOptions = (namespace: string, opts: ConverterOptions) => {
    setOptions({ ...options, [namespace]: opts })
  }

  const value = { options, setOptions: wrapperSetOptions }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
