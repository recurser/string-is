import { Paragraph, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

export const Form = () => {
  const { t } = useTranslation('domain-input-form')

  return (
    <>
      <Paragraph>{t('input_label')}</Paragraph>
      <Textarea />
    </>
  )
}
