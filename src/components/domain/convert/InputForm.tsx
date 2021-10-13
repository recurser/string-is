import { Textarea } from 'evergreen-ui'
import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import {
  ChangeEvent,
  ClipboardEvent,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useInputContext } from '@contexts/InputContext'

interface Props {
  setPasted: (pasted: boolean) => void
}

// Timeout before deciding that the user has stopped typing.
const DebounceTimeout = 300

export const InputForm = ({ setPasted }: Props) => {
  const { t } = useTranslation('domain-convert-form')
  const { setInputString } = useInputContext()
  const [input, setInput] = useState('')

  // Focus on the textarea on first load.
  // See https://stackoverflow.com/a/67906087
  const inputRef = useCallback((input) => input?.focus(), [])

  const doDebounce = useMemo(
    () => debounce((data: string) => setInputString(data), DebounceTimeout),
    [setInputString],
  )

  useEffect(() => doDebounce(input), [input, doDebounce])

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(event.target.value)

  const onPaste = (_event: ClipboardEvent<HTMLTextAreaElement>) => {
    setTimeout(() => setPasted(true), DebounceTimeout)
  }

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
