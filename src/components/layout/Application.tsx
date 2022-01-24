import { Pane, majorScale } from 'evergreen-ui'
import { PropsWithChildren, ReactElement } from 'react'

import { AnalyticsProvider } from '@services/Analytics'
import { ConverterContext } from '@contexts/ConverterContext'
import { ConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { Footer } from '@components/layout/Footer'
import { Header } from '@components/layout/Header'

interface Props {
  maxWidth: number
}

export const Application = ({
  children,
  maxWidth,
}: PropsWithChildren<Props>): ReactElement => (
  <AnalyticsProvider>
    <ConverterContext>
      <ConverterOptionsContext>
        <Pane
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginLeft="auto"
          marginRight="auto"
          maxWidth={maxWidth}
          paddingTop={majorScale(1)}
        >
          <Header />

          <Pane>{children}</Pane>

          <Footer />
        </Pane>
      </ConverterOptionsContext>
    </ConverterContext>
  </AnalyticsProvider>
)

Application.defaultProps = {
  maxWidth: 800,
}
