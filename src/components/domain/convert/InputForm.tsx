import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, useEffect, useMemo, useCallback, useState } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { CodeTextarea } from '@components/forms'
import { useInputContext } from '@contexts/InputContext'

// Timeout before deciding that the user has stopped typing.
const DebounceTimeout = 500

export const InputForm = () => {
  const { t } = useTranslation('domain-convert-inputForm')
  const { inputString, setInputString } = useInputContext()
  const [input, setInput] = useState('')

  // Focus on the textarea on first load.
  // See https://stackoverflow.com/a/67906087
  const inputRef = useCallback((el) => el?.focus(), [])

  const doDebounce = useMemo(
    () => debounce((data: string) => setInputString(data), DebounceTimeout),
    [setInputString],
  )

  useEffect(() => doDebounce(input), [input, doDebounce])

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(event.target.value)

  return (
    <LayoutColumn inputString={inputString} label={t('label')}>
      <CodeTextarea
        autoFocus={
          true
        } /* This doesn't seem to do anything, but might help in some browsers? */
        flex={1}
        height="100%"
        onChange={onChange}
        placeholder={t('placeholder')}
        ref={inputRef}
        tabIndex={1}
        value={input}
      />
    </LayoutColumn>
  )
}
