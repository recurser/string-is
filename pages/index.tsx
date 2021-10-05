import { Pane } from 'evergreen-ui'
import type { NextPage } from 'next'
import Head from 'next/head'

import { Convert } from '@pages/Convert'

const Home: NextPage = () => {
  return (
    <Pane>
      <Head>
        <title>Dev Toolbar</title>
      </Head>

      <Convert />
    </Pane>
  )
}

export default Home // eslint-disable-line import/no-default-export
