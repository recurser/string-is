import { Image, majorScale, minorScale, Pane, Tab, Tablist } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { Link } from '@components/navigation'
import Logo from '@images/logo.svg'
import { ROUTE_ABOUT, ROUTE_CONVERT } from '@services/Routes'

export const Header = (): React.ReactElement => {
  const { t } = useTranslation('layout-header')
  const { pathname } = useRouter()

  return (
    <Pane
      alignItems="center"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      marginBottom={majorScale(3)}
    >
      <Link href={ROUTE_CONVERT} lineHeight={0}>
        <Image
          alt="Dev Toolbar Logo"
          height={majorScale(5)}
          src={`${Logo.src}`}
          width={majorScale(5)}
        />
      </Link>
      <Pane>
        <Tablist display="flex" gap={minorScale(1)}>
          <Link href={ROUTE_ABOUT}>
            <Tab isSelected={pathname === ROUTE_ABOUT}>{t('menuAbout')}</Tab>
          </Link>
          <Link href="https://github.com/devtoolbar/devtoolbar" target="_blank">
            <Tab isSelected={false}>{t('menuGithub')}</Tab>
          </Link>
        </Tablist>
      </Pane>
    </Pane>
  )
}
