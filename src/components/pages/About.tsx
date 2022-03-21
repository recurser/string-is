import { ListItem, Pane, Strong } from 'evergreen-ui'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import { Card, MetaTags } from '@components/layout'
import {
  Heading,
  OrderedList,
  Paragraph,
  UnorderedList,
} from '@components/typography'
import { Link } from '@components/navigation'

/**
 * Renders the 'about' page, which describes the project goals,
 * acknowledgements, and alternatives.
 */
export const About = () => {
  const { t } = useTranslation('pages-about')

  return (
    <Pane display="flex">
      <MetaTags title={t('page_title')} />

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

          <ListItem>{t('li_goal_dependencies')}</ListItem>

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
                  href="https://devtoys.app/"
                  key="li_alternative_dev_toys_1"
                  target="_blank"
                />,
                <Link
                  href="https://github.com/veler"
                  key="li_alternative_dev_toys_2"
                  target="_blank"
                />,
              ]}
              i18nKey="pages-about:li_alternative_dev_toys"
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
            <Link href="https://github.com/wanasit/chrono" target="_blank">
              chrono-node
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/brix/crypto-js" target="_blank">
              crypto-js
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://github.com/iamkun/dayjs" target="_blank">
              dayjs
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://evergreen.segment.com/" target="_blank">
              evergreen-ui
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://github.com/NaturalIntelligence/fast-xml-parser"
              target="_blank"
            >
              fast-xml-parser
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
            <Link href="https://github.com/lodash/lodash" target="_blank">
              lodash
            </Link>
          </ListItem>

          <ListItem>
            <Link href="https://nextjs.org/" target="_blank">
              next
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://github.com/vinissimus/next-translate"
              target="_blank"
            >
              next-translate
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
            <Link href="https://github.com/showdownjs/showdown" target="_blank">
              showdown
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

        <Paragraph>
          <Trans
            components={[
              <Link
                href="https://thenounproject.com/icon/developer-2286230/"
                key="para_icon_1"
                target="_blank"
              />,
              <Link
                href="https://thenounproject.com/slaughterslash/"
                key="para_icon_2"
                target="_blank"
              />,
            ]}
            i18nKey="pages-about:para_icon"
          />
        </Paragraph>

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
