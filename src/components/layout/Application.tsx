import { majorScale, Pane } from 'evergreen-ui'

import { Footer } from '@components/layout/Footer'
import { Header } from '@components/layout/Header'
import { InputContext } from '@contexts/InputContext'

export const Application = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>): React.ReactElement => (
  <InputContext>
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginLeft="auto"
      marginRight="auto"
      maxWidth={900}
      paddingTop={majorScale(3)}
    >
      <Header />

      <Pane>{children}</Pane>

      <Footer />
    </Pane>
  </InputContext>
)
