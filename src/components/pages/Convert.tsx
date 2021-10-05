import { majorScale, Pane, Paragraph, Textarea } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { Card } from '@components/layout/Card'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')

  return (
    <Pane display="flex" gap={majorScale(2)}>
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card>
        <Paragraph>{t('input_label')}</Paragraph>
        <Textarea />
      </Card>
      <Card>
        <Paragraph>{t('output_label')}</Paragraph>
        <Textarea />
      </Card>
    </Pane>
  )
}
