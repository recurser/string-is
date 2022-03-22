import { Pane } from 'evergreen-ui'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import { Heading, Paragraph } from '@components/typography'
import { Card } from '@components/layout'
import { Link } from '@components/navigation'
import { MetaTags } from '@components/utility'

/**
 * Renders the 'security' page, which describes some of the measures
 * taken to ensure the security and privacy of user data.
 */
export const Security = () => {
  const { t } = useTranslation('pages-security')

  return (
    <Pane display="flex">
      <MetaTags description={t('meta_description')} title={t('page_title')} />

      <Card title={t('page_heading')}>
        <Paragraph>{t('intro')}</Paragraph>

        <Heading>{t('open_source_heading')}</Heading>

        <Paragraph>
          <Trans
            components={[
              <Link
                href="https://github.com/recurser/string-is"
                key="link_github_1"
                target="_blank"
              />,
            ]}
            i18nKey="pages-security:open_source_content"
          />
        </Paragraph>

        <Heading>{t('local_heading')}</Heading>

        <Paragraph>
          <Trans
            components={[<i key="local_content_1" />]}
            i18nKey="pages-security:local_content"
          />
        </Paragraph>

        <Heading>{t('ssl_heading')}</Heading>

        <Paragraph>
          <Trans
            components={[
              <Link
                href="https://letsencrypt.org/"
                key="link_lets_encrypt"
                target="_blank"
              />,
              <Link
                href="https://vercel.com/"
                key="link_vercel"
                target="_blank"
              />,
            ]}
            i18nKey="pages-security:ssl_content"
          />
        </Paragraph>

        <Heading>{t('csp_heading')}</Heading>

        <Paragraph>{t('csp_content')}</Paragraph>

        <Heading>{t('cookies_heading')}</Heading>

        <Paragraph>{t('cookies_content')}</Paragraph>

        <Heading>{t('analytics_heading')}</Heading>

        <Paragraph>
          <Trans
            components={[
              <Link
                href="https://letsencrypt.org/"
                key="link_plausible_home"
                target="_blank"
              />,
              <Link
                href="https://plausible.io/string.is"
                key="link_plausible_dashboard"
                target="_blank"
              />,
            ]}
            i18nKey="pages-security:analytics_content"
          />
        </Paragraph>

        <Heading>{t('dependencies_heading')}</Heading>

        <Paragraph>
          <Trans
            components={[
              <Link
                href="https://github.com/features/security"
                key="link_github_security"
                target="_blank"
              />,
            ]}
            i18nKey="pages-security:dependencies_content"
          />
        </Paragraph>

        <Heading>{t('gdpr_heading')}</Heading>

        <Paragraph>{t('gdpr_content')}</Paragraph>
      </Card>
    </Pane>
  )
}
