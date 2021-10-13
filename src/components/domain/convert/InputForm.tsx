import { Textarea } from 'evergreen-ui'
import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import {
  ChangeEvent,
  ClipboardEvent,
  useEffect,
  useMemo,
  createRef,
  useState,
} from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useInputContext } from '@contexts/InputContext'

interface Props {
  setPasted: (pasted: boolean) => void
}

export const InputForm = ({ setPasted }: Props) => {
  const { t } = useTranslation('domain-convert-form')
  const { setInputString } = useInputContext()
  const [input, setInput] = useState('')
  const inputRef = createRef<HTMLTextAreaElement>()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  const doDebounce = useMemo(
    () => debounce((data: string) => setInputString(data), 300),
    [setInputString],
  )

  useEffect(() => doDebounce(input), [input, doDebounce])

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(event.target.value)

  const onPaste = (_event: ClipboardEvent<HTMLTextAreaElement>) =>
    setPasted(true)

  return (
    <LayoutColumn label={t('label')}>
      <Textarea
        autoFocus={
          true
        } /* This doesn't seem to do anything, but might help in some browsers? */
        onChange={onChange}
        onPaste={onPaste}
        placeholder={t('placeholder')}
        ref={inputRef}
        value={input}
      />
    </LayoutColumn>
  )
}
