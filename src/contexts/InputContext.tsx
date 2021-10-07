import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState,
} from 'react'

interface InputProps {
  input: string
  setInput: (input: string) => void
}

const Context = createContext<InputProps>({
  input: '',
  setInput: (_: string) => undefined,
})

export const useInputContext = (): InputProps => useContext(Context)

export const InputContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [input, setInput] = useState<string>('')

  const value = { input, setInput }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
