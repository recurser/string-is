import { Paragraph, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { useInputContext } from '@contexts/InputContext'

export const Form = () => {
  const { t } = useTranslation('domain-input-form')

  const { input, setInput } = useInputContext()

  const onChange = (event) => setInput(event.target.value)

  return (
    <>
      <Paragraph>{t('input_label')}</Paragraph>
      <Textarea onChange={onChange} value={input} />
    </>
  )
}
