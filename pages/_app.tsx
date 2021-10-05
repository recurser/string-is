import type { AppProps } from 'next/app'

import { Application as Layout } from '@components/layout/Application'

function DevToolbar({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default DevToolbar // eslint-disable-line import/no-default-export
