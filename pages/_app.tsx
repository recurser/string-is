import type { AppProps } from 'next/app'

import { Application as Layout } from '@components/layout/Application'

function StringToolbox({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default StringToolbox // eslint-disable-line import/no-default-export
