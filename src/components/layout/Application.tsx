import { Pane, majorScale } from 'evergreen-ui'
import { PropsWithChildren, ReactElement } from 'react'

import { AnalyticsProvider } from '@services/Analytics'
import { ConverterContext } from '@contexts/ConverterContext'
import { ConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { Footer } from '@components/layout/Footer'
import { Header } from '@components/layout/Header'

export interface ApplicationProps {
  /**
   * The maximum width of the layout. This allows us to have
   * pages wider than the default where necessary.
   */
  maxWidth: number

  /**
   * Adds an optional heading
   */
  pageHeading?: string | ReactElement
}

/**
 * Renders the standard application layout, used by almost all
 * pages. This includes various contexts for analytics, conversion
 * options etc.
 *
 * @param props - the component props.
 */
export const Application = ({
  children,
  maxWidth,
  pageHeading,
}: PropsWithChildren<ApplicationProps>): ReactElement => (
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
          <Header pageHeading={pageHeading} />

          <Pane display="flex" flexDirection="column">
            {children}
          </Pane>

          <Footer />
        </Pane>
      </ConverterOptionsContext>
    </ConverterContext>
  </AnalyticsProvider>
)

Application.defaultProps = {
  maxWidth: 800,
}
