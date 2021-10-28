import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { CodeTextarea } from '@components/forms'
import { useInputContext } from '@contexts/InputContext'

interface Props {
  setTriggerMenu: (triggerMenu: boolean) => void
}

// Timeout before deciding that the user has stopped typing.
const DebounceTimeout = 300

export const InputForm = ({ setTriggerMenu }: Props) => {
  const { t } = useTranslation('domain-convert-inputForm')
  const { inputString, setInputString } = useInputContext()
  const [input, setInput] = useState('')

  // If a string was provided via the URL, initialize with it.
  const router = useRouter()
  const { input: urlInput } = router?.query || {}
  useEffect(() => {
    if (urlInput) {
      setInput(urlInput as string)
    }
  }, [urlInput])

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

  // This is a hack to trigger the menu when the OutputSelector
  // button is focused on. We know from the tabIndex that that
  // button will be next when tab is pressed. Using the onFocus()
  // event on the button instead opens up a *huge* can of worms.
  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Tab') {
      setTimeout(() => setTriggerMenu(true), DebounceTimeout)
    }
  }

  const onPaste = (_event: ClipboardEvent<HTMLTextAreaElement>) => {
    setTimeout(() => setTriggerMenu(true), DebounceTimeout)
  }

  return (
    <LayoutColumn inputString={inputString} label={t('label')}>
      <CodeTextarea
        autoFocus={
          true
        } /* This doesn't seem to do anything, but might help in some browsers? */
        flex={1}
        height="100%"
        onChange={onChange}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        placeholder={t('placeholder')}
        ref={inputRef}
        tabIndex={1}
        value={input}
      />
    </LayoutColumn>
  )
}
