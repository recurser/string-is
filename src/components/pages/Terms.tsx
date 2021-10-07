import { Pane, Paragraph } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { Card } from '@components/layout/Card'

export const Terms = () => {
  const { t } = useTranslation('pages-terms')

  return (
    <Pane display="flex">
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card title={t('page_heading')}>
        <Paragraph>{t('todo')}</Paragraph>
      </Card>
    </Pane>
  )
}
