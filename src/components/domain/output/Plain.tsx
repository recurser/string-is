import { Paragraph, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { useInputContext } from '@contexts/InputContext'
import { Output } from '@lib/outputs'

interface Props {
  output: Output
}
export const Plain = ({ output }: Props) => {
  const { t } = useTranslation('domain-output-plain')

  const { inputString } = useInputContext()

  return (
    <>
      <Paragraph>{t('label')}</Paragraph>
      <Textarea readOnly={true} value={output.operation(inputString)} />
    </>
  )
}
