import { Image, majorScale, minorScale, Pane, Tab, Tablist } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

import { Link } from '@components/navigation'
import Logo from '@images/logo.svg'
import { ROUTE_ABOUT, ROUTE_CONVERT } from '@services/Routes'

export const Header = (): ReactElement => {
  const { t } = useTranslation('layout-header')
  const { pathname } = useRouter()

  return (
    <Pane
      alignItems="center"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      marginBottom={majorScale(2)}
    >
      <Link href={ROUTE_CONVERT} lineHeight={0}>
        <Image
          alt="string-is logo"
          height={majorScale(5)}
          src={`${Logo.src}`}
          width={majorScale(5)}
        />
      </Link>
      <Pane>
        <Tablist display="flex" gap={minorScale(1)}>
          <Link href={ROUTE_ABOUT}>
            <Tab isSelected={pathname === ROUTE_ABOUT}>{t('menu_about')}</Tab>
          </Link>
          <Link href="https://github.com/recurser/string-is" target="_blank">
            <Tab isSelected={false}>{t('menu_github')}</Tab>
          </Link>
        </Tablist>
      </Pane>
    </Pane>
  )
}
