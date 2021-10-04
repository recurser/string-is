import type { AppProps } from 'next/app'

import { ApplicationLayout } from '@layouts/ApplicationLayout'

function DevToolbar({ Component, pageProps }: AppProps) {
  return (
    <ApplicationLayout>
      <Component {...pageProps} />
    </ApplicationLayout>
  )
}

export default DevToolbar // eslint-disable-line import/no-default-export
