import { Pane, Paragraph, Textarea } from 'evergreen-ui'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Pane>
      <Head>
        <title>Dev Toolbar</title>
      </Head>

      <Paragraph>Paste here</Paragraph>
      <Textarea />
    </Pane>
  )
}

export default Home // eslint-disable-line import/no-default-export
