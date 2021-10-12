import { Pane, Paragraph, Textarea } from 'evergreen-ui'
import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, useEffect, useMemo, createRef, useState } from 'react'

import { useInputContext } from '@contexts/InputContext'

export const Form = () => {
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

  return (
    <Pane>
      <Paragraph role="label">{t('label')}</Paragraph>
      <Textarea
        autoFocus={
          true
        } /* This doesn't seem to do anything, but might help in some browsers? */
        onChange={onChange}
        placeholder={t('placeholder')}
        ref={inputRef}
        value={input}
      />
    </Pane>
  )
}
