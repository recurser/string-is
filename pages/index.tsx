import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Convert } from '@pages/Convert'

/**
 * The main conversion home page.
 */
// eslint-disable-next-line import/no-default-export
export default function Home() {
  return <Convert />
}

/**
 * Defines the layout component for this page.
 *
 * @param page - The React page comonent.
 */
Home.getLayout = (page: ReactElement) => (
  <Application maxWidth={1600}>{page}</Application>
)
