import { Pane, Paragraph } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { Card } from '@components/layout/Card'

export const About = () => {
  const { t } = useTranslation('pages-about')

  return (
    <Pane display="flex">
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card>
        <Paragraph>{t('todo')}</Paragraph>
      </Card>
    </Pane>
  )
}
