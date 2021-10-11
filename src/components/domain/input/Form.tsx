import { Paragraph, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent } from 'react'

import { useInputContext } from '@contexts/InputContext'

export const Form = () => {
  const { t } = useTranslation('domain-input-form')

  const { inputString, setInputString } = useInputContext()

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setInputString(event.target.value)

  return (
    <>
      <Paragraph>{t('label')}</Paragraph>
      <Textarea onChange={onChange} value={inputString} />
    </>
  )
}
