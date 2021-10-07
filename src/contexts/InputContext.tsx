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
  setLabels: (_: string) => undefined,
})

export const useInputContext = (): InputProps => useContext(Context)

export const InputContext = ({
  children,
}: PropsWithChildren<Record<string, never>>): ReactElement => {
  const [input, setInput] = useState<string>('')

  const value = { input, setInput }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
