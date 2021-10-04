import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dev Toolbar</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <p>Paste here</p>
      <textarea />
    </div>
  )
}

export default Home // eslint-disable-line import/no-default-export
