import { ListItem, Pane } from 'evergreen-ui'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import { Heading, Paragraph, UnorderedList } from '@components/typography'
import { Card } from '@components/layout'
import { Link } from '@components/navigation'
import { MetaTags } from '@components/utility'
import { ROUTE_SECURITY } from '@services/Routes'

/**
 * Renders the 'privacy policy', which describes what we do and
 * don't do with user data.
 */
export const Privacy = () => {
  const { t } = useTranslation('pages-privacy')

  return (
    <Pane display="flex">
      <MetaTags description={t('meta_description')} title={t('page_title')} />

      <Card title={t('page_heading')}>
        <Paragraph>
          <Trans
            components={[<Link href={ROUTE_SECURITY} key="para_intro" />]}
            i18nKey="pages-privacy:para_tldr"
          />
        </Paragraph>

        <Heading>{t('heading_dont')}</Heading>

        <UnorderedList>
          <ListItem>{t('li_dont_personal')}</ListItem>
          <ListItem>{t('li_dont_cookies')}</ListItem>
          <ListItem>{t('li_dont_share')}</ListItem>
          <ListItem>{t('li_dont_mine')}</ListItem>
          <ListItem>{t('li_dont_pay')}</ListItem>
        </UnorderedList>

        <Heading>{t('heading_do')}</Heading>

        <UnorderedList>
          <ListItem>
            <Trans
              components={[
                <Link
                  href="https://plausible.io/"
                  key="li_do_analytics_1"
                  target="_blank"
                />,
                <Link
                  href="https://plausible.io/string.is"
                  key="li_do_analytics_2"
                  target="_blank"
                />,
                <Link
                  href="https://plausible.io/data-policy"
                  key="li_do_analytics_3"
                  target="_blank"
                />,
              ]}
              i18nKey="pages-privacy:li_do_analytics"
            />
          </ListItem>
          <ListItem>{t('li_do_local_storage')}</ListItem>
        </UnorderedList>

        <Heading>{t('heading_changes')}</Heading>

        <Paragraph>
          <Trans
            components={[
              <Link
                href="https://github.com/recurser/string-is/commits/main/locales/en/pages-privacy.json"
                key="para_changes"
                target="_blank"
              />,
            ]}
            i18nKey="pages-privacy:para_changes"
          />
        </Paragraph>

        <Paragraph>
          <Trans
            components={[
              <Link
                href="https://github.com/recurser/string-is/issues"
                key="para_file_issue"
                target="_blank"
              />,
            ]}
            i18nKey="pages-privacy:para_file_issue"
          />
        </Paragraph>
      </Card>
    </Pane>
  )
}
