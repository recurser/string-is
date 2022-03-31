import {
  Heading,
  Image,
  Pane,
  Tab,
  Tablist,
  majorScale,
  minorScale,
} from 'evergreen-ui'
import { ReactElement } from 'react'
import { styled } from '@compiled/react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import { ROUTE_ABOUT, ROUTE_CONVERT } from '@services/Routes'
import { Link } from '@components/navigation'
import Logo from '@images/logo.svg'
import { MOBILE } from '@lib/utilities/Constants'

/**
 * A <Heading /> that only displays on mobile devices.
 */
const MobileHeading = styled(Heading)`
  display: none;

  @media only screen and (max-width: ${MOBILE}px) {
    display: block;
  }
`

/**
 * A <Heading /> that only displays on non-mobile devices.
 */
const NonMobileHeading = styled(Heading)`
  display: none;

  @media only screen and (min-width: ${MOBILE + 1}px) {
    display: block;
  }
`

interface Props {
  pageHeading?: string | ReactElement
}

/**
 * Renders the standard page header with the logo and main menu.
 */
export const Header = ({ pageHeading }: Props): ReactElement => {
  const { t } = useTranslation('layout-header')
  const { pathname } = useRouter()

  return (
    <Pane flexDirection="column">
      <Pane
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={majorScale(2)}
      >
        <Pane alignItems="center" display="flex">
          <Link href={ROUTE_CONVERT} lineHeight={0}>
            <Image
              alt="string-is logo"
              cursor="pointer"
              display="inline-flex"
              height={majorScale(5)}
              src={`${Logo.src}`}
              width={majorScale(5)}
            />
          </Link>
          {pageHeading ? ( // Non-mobile header, next to the logo.
            <NonMobileHeading
              display="inline-flex"
              height="100%"
              is="h1"
              marginLeft={majorScale(2)}
            >
              {pageHeading}
            </NonMobileHeading>
          ) : null}
        </Pane>

        <Pane>
          <Tablist display="flex" gap={minorScale(1)}>
            <Link href={ROUTE_CONVERT}>
              <Tab isSelected={pathname === ROUTE_CONVERT}>
                {t('menu_home')}
              </Tab>
            </Link>
            <Link href={ROUTE_ABOUT}>
              <Tab isSelected={pathname === ROUTE_ABOUT}>{t('menu_about')}</Tab>
            </Link>
            <Link href="https://github.com/recurser/string-is" target="_blank">
              <Tab isSelected={false}>{t('menu_github')}</Tab>
            </Link>
          </Tablist>
        </Pane>
      </Pane>

      {pageHeading ? ( // Mobile header, below the logo an menu.
        <MobileHeading
          is="h1"
          marginBottom={majorScale(2)}
          marginTop={majorScale(2)}
          textAlign="center"
        >
          {pageHeading}
        </MobileHeading>
      ) : null}
    </Pane>
  )
}
