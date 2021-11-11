import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Convert } from '@pages/Convert'

// eslint-disable-next-line import/no-default-export
export default function Home() {
  return <Convert />
}

Home.getLayout = (page: ReactElement) => (
  <Application maxWidth={1600}>{page}</Application>
)
