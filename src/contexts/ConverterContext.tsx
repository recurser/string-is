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
  converter: Converter
  setConverter: Dispatch<Converter>
}

const localStorageKey = 'string.is:RecentConverters'

// Returns an array of recently-used converter IDs.
export const recentConverterIds = () =>
  JSON.parse(window.localStorage.getItem(localStorageKey) || '[]')

const Context = createContext<Props>({
  converter: NullConverter,
  setConverter: (_: Converter) => undefined,
})

export const useConverterContext = (): Props => {
  const { converter, setConverter } = useContext(Context)
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

  return { converter, setConverter: wrappedSetConverter }
}

export const ConverterContext = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  const [converter, setConverter] = useState<Converter>(NullConverter)

  const value = { converter, setConverter }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
