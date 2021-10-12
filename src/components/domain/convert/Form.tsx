import { Paragraph, Textarea } from 'evergreen-ui'
import { debounce } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'

import { useInputContext } from '@contexts/InputContext'

export const Form = () => {
  const { t } = useTranslation('domain-convert-form')

  const { setInputString } = useInputContext()

  const [input, setInput] = useState('')

  const doDebounce = useMemo(
    () => debounce((data: string) => setInputString(data), 300),
    [setInputString],
  )

  useEffect(() => doDebounce(input), [input, doDebounce])

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setInput(event.target.value)

  return (
    <>
      <Paragraph role="label">{t('label')}</Paragraph>
      <Textarea onChange={onChange} value={input} />
    </>
  )
}
