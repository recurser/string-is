import { majorScale, Pane } from 'evergreen-ui'
import { PropsWithChildren, ReactElement } from 'react'

import { Footer } from '@components/layout/Footer'
import { Header } from '@components/layout/Header'
import { InputContext } from '@contexts/InputContext'

interface Props {
  maxWidth: number
}

export const Application = ({
  children,
  maxWidth,
}: PropsWithChildren<Props>): ReactElement => (
  <InputContext>
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      marginLeft="auto"
      marginRight="auto"
      maxWidth={maxWidth}
      paddingTop={majorScale(3)}
    >
      <Header />

      <Pane>{children}</Pane>

      <Footer />
    </Pane>
  </InputContext>
)

Application.defaultProps = {
  maxWidth: 800,
}
