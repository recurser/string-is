import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react'

interface InputProps {
  inputString: string
  setInputString: Dispatch<string>
}

const Context = createContext<InputProps>({
  inputString: '',
  setInputString: (_: string) => undefined,
})

export const useInputContext = (): InputProps => useContext(Context)

export const InputContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [inputString, setInputString] = useState<string>('')

  const value = { inputString, setInputString }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
