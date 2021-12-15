import { ListItem, Pane, Strong } from 'evergreen-ui'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { Card } from '@components/layout/Card'
import { Link } from '@components/navigation'
import {
  Heading,
  OrderedList,
  Paragraph,
  UnorderedList,
} from '@components/typography'

export const About = () => {
  const { t } = useTranslation('pages-about')

  return (
    <Pane display="flex">
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card title={t('page_heading')}>
        <Paragraph>
          <Trans
            components={[<Strong key="para_intro_1" />]}
            i18nKey="pages-about:para_intro"
          />
        </Paragraph>

        <Paragraph>{t('para_paranoid')}</Paragraph>

        <Paragraph>{t('para_goals')}</Paragraph>

        <OrderedList>
          <ListItem>{t('li_goal_open_source')}</ListItem>

          <ListItem>{t('li_goal_client_side')}</ListItem>

          <ListItem>{t('li_goal_no_cookies')}</ListItem>

          <ListItem>
            <Trans
              components={[
                <Link
                  href="https://content-security-policy.com/"
                  key="li_goal_strict_csp_1"
                  target="_blank"
                />,
              ]}
              i18nKey="pages-about:li_goal_strict_csp"
            />
          </ListItem>

          <ListItem>{t('li_goal_intelligent')}</ListItem>
        </OrderedList>

        <Paragraph>{t('para_built')}</Paragraph>

        <Heading>{t('heading_alternatives')}</Heading>

        <UnorderedList>
          <ListItem>
            <Trans
              components={[
                <Link
                  href="https://devutils.app/"
                  key="li_alternative_dev_utils_1"
                  target="_blank"
                />,
                <Link
                  href="https://github.com/trungdq88"
                  key="li_alternative_dev_utils_2"
                  target="_blank"
                />,
              ]}
              i18nKey="pages-about:li_alternative_dev_utils"
            />
          </ListItem>

          <ListItem>
            <Trans
              components={[
                <Link
                  href="https://gchq.github.io/CyberChef/"
                  key="li_alternative_cyber_chef_1"
                  target="_blank"
                />,
                <Link
                  href="https://www.gchq.gov.uk/"
                  key="li_alternative_cyber_chef_1"
                  target="_blank"
                />,
              ]}
              i18nKey="pages-about:li_alternative_cyber_chef"
            />
          </ListItem>
        </UnorderedList>

        <Heading>{t('heading_acknowledgements')}</Heading>

        <Paragraph>{t('para_acknowledgements')}</Paragraph>

        <UnorderedList>
          <ListItem>
            <Link href="https://github.com/brix/crypto-js" target="_blank">
              crypto-js
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://evergreen.segment.com/" target="_blank">
              evergreen-ui
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://hjson.github.io/" target="_blank">
              hjson
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/dankogai/js-base64" target="_blank">
              js-base64
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/nodeca/js-yaml" target="_blank">
              js-yaml
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://github.com/auth0/node-jsonwebtoken"
              target="_blank"
            >
              jsonwebtoken
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://nextjs.org/" target="_blank">
              next
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://www.papaparse.com/" target="_blank">
              papaparse
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/prettier/prettier" target="_blank">
              prettier
            </Link>
          </ListItem>

          <ListItem>
            <Trans
              components={[
                <Link
                  href="https://github.com/sindresorhus/is-html/blob/main/index.js"
                  key="li_acknowledgement_is_html_1"
                  target="_blank"
                />,
              ]}
              i18nKey="pages-about:li_acknowledgement_is_html"
            />
          </ListItem>
        </UnorderedList>

        <Heading>Contact</Heading>
        <UnorderedList>
          <ListItem>
            <Trans
              components={[
                <Link
                  href="https://twitter.com/string__is"
                  key="para_contact_twitter_1"
                  target="_blank"
                />,
                <Link
                  href="https://twitter.com/davemetrics"
                  key="para_contact_twitter_2"
                  target="_blank"
                />,
              ]}
              i18nKey="pages-about:para_contact_twitter"
            />
          </ListItem>

          <ListItem>
            Github:{' '}
            <Link href="https://github.com/recurser/string-is" target="_blank">
              github.com/recurser/string-is
            </Link>
          </ListItem>
        </UnorderedList>
      </Card>
    </Pane>
  )
}
