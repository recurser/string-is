import { PropsWithChildren, ReactElement } from 'react'
import { isEmpty } from 'lodash'

import { PlausibleProvider, usePlausible } from '@contexts/PlausibleProvider'

export const useAnalytics = usePlausible

// Add 'ANALYTICS_ENABLED=true' to .env.local to enable analytics during development.
const enabled =
  process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' ||
  process.env.NODE_ENV === 'production'

/**
 * A provider which wraps the PlausibleProvider and sets standard
 * options and domains.
 *
 * @param props - the component props.
 */
export const AnalyticsProvider = ({
  children,
}: PropsWithChildren<Record<string, unknown>>): ReactElement => {
  if (!enabled || isEmpty(process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN)) {
    return <>{children}</>
  } else if (isEmpty(process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN)) {
    console.warn(
      'Analytics is enabled but NEXT_PUBLIC_ANALYTICS_DOMAIN is not set',
    )
    return <>{children}</>
  }

  return (
    <PlausibleProvider
      domain={process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN as string}
      enabled={enabled}
      trackLocalhost={true}
      trackOutboundLinks={true}
    >
      {children}
    </PlausibleProvider>
  )
}
