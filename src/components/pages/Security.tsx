import { Pane, Paragraph } from 'evergreen-ui'
import Head from 'next/head'

import { Card } from '@components/layout/Card'

export const Security = () => {
  return (
    <Pane display="flex">
      <Head>
        <title>{'page_title'}</title>
      </Head>

      <Card>
        <Paragraph>{'todo'}</Paragraph>
      </Card>
    </Pane>
  )
}
