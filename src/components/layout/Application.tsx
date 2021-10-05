import { Image, majorScale, Pane, Tab, Tablist } from 'evergreen-ui'

import Logo from '@images/logo.svg'

export const Application = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): React.ReactElement => (
  <>
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginLeft="auto"
      marginRight="auto"
      maxWidth={900}
      paddingTop={majorScale(3)}
    >
      <Pane
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom={majorScale(3)}
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

      <Pane>{children}</Pane>
    </Pane>
  </>
)
