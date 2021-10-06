import { Image, majorScale, minorScale, Pane, Tab, Tablist } from 'evergreen-ui'
import { useRouter } from 'next/router'

import { Link } from '@components/navigation'
import Logo from '@images/logo.svg'
import { ROUTE_ABOUT, ROUTE_CONVERT } from '@services/Routes'

export const Header = (): React.ReactElement => {
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
          alt="String Toolbox Logo"
          height={majorScale(5)}
          src={`${Logo.src}`}
          width={majorScale(5)}
        />
      </Link>
      <Pane>
        <Tablist display="flex" gap={minorScale(1)}>
          <Link href={ROUTE_ABOUT}>
            <Tab isSelected={pathname === ROUTE_ABOUT}>{'menuAbout'}</Tab>
          </Link>
          <Link
            href="https://github.com/stringtoolbox/stringtoolbox"
            target="_blank"
          >
            <Tab isSelected={false}>{'menuGithub'}</Tab>
          </Link>
        </Tablist>
      </Pane>
    </Pane>
  )
}
