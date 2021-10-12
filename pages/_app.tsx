import type { AppProps } from 'next/app'

import { Application as Layout } from '@components/layout'

function StringIs({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default StringIs // eslint-disable-line import/no-default-export
