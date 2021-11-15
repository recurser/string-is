import { Pane } from 'evergreen-ui'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useEffect } from 'react'

import { Card } from '@components/layout/Card'
import { Link } from '@components/navigation'
import { Heading, Paragraph } from '@components/typography'
import { useAnalytics } from '@services/Analytics'
import { ROUTE_CONVERT } from '@services/Routes'

export const NotFound = () => {
  const { t } = useTranslation('pages-errors-notFound')
  const analytics = useAnalytics()

  useEffect(() => {
    analytics('404', {
      props: {
        path: document.location.pathname,
      },
    })
  }, [analytics])

  return (
    <Pane display="flex">
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card title={t('page_heading')}>
        <Heading>{t('our_site_heading')}</Heading>
        <Paragraph>{t('our_site_paragraph')}</Paragraph>

        <Heading>{t('another_site_heading')}</Heading>
        <Paragraph>{t('another_site_paragraph')}</Paragraph>

        <Heading>{t('typo_heading')}</Heading>
        <Paragraph>{t('typo_paragraph')}</Paragraph>

        <Paragraph>
          <Trans
            components={{
              link: <Link href={`mailto:${process.env.CONTACT_EMAIL}`} />,
            }}
            i18nKey="pages-errors-notFound:contact_support"
          />
        </Paragraph>

        <Paragraph textAlign="center">
          <Link href={ROUTE_CONVERT}>{t('home_button')}</Link>
        </Paragraph>
      </Card>
    </Pane>
  )
}
