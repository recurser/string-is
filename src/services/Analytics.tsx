import { isEmpty } from 'lodash'
import PlausibleProvider, { usePlausible } from 'next-plausible'
import { PropsWithChildren, ReactElement } from 'react'

export const useAnalytics = usePlausible

// Add 'ANALYTICS_ENABLED=true' to .env.local to enable analytics during development.
const enabled =
  process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true' ||
  process.env.NODE_ENV === 'production'

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
      trackOutboundLinks={true}
    >
      {children}
    </PlausibleProvider>
  )
}
