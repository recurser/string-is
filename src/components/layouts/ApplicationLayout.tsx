import { Image, majorScale, Pane, Tab, Tablist } from 'evergreen-ui'

import Logo from '@images/logo.svg'
import { useBreakpoints } from '@services/Responsive'

export const ApplicationLayout = ({ children }) => {
  const breakpoints = useBreakpoints()

  const gap = `${majorScale(2)}px ${majorScale(4)}px`
  const padTop = majorScale(3)
  const rows = `${majorScale(4)}px 1fr`
  let columns
  const areas =
    "'left-pane menu-pane right-pane' 'left-pane content-pane right-pane'"

  if (breakpoints.isBigscreen) {
    columns = 'auto 1000px auto'
  } else if (breakpoints.isDesktop) {
    columns = '1fr 4fr 1fr'
  } else {
    columns = '0fr 1fr 0fr'
  }

  return (
    <>
      <Pane
        display="grid"
        gridGap={gap}
        gridTemplateAreas={areas}
        gridTemplateColumns={columns}
        gridTemplateRows={rows}
        justifyContent="center"
        paddingTop={padTop}
      >
        <Pane
          alignItems="center"
          display="flex"
          flexDirection="row"
          gridArea="menu-pane"
          justifyContent="space-between"
        >
          <Image
            alt="Dev Toolbar Logo"
            height={majorScale(5)}
            src={`${Logo.src}`}
            width={majorScale(5)}
          />
          <Pane>
            <Tablist>
              <Tab isSelected={true} onSelect={() => undefined}>
                Home
              </Tab>
              <Tab isSelected={false} onSelect={() => undefined}>
                About
              </Tab>
              <Tab isSelected={false} onSelect={() => undefined}>
                Github
              </Tab>
            </Tablist>
          </Pane>
        </Pane>

        <Pane gridArea="content-pane">{children}</Pane>
      </Pane>
    </>
  )
}
