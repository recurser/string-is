import type { ReactElement } from 'react'
import Trans from 'next-translate/Trans'

import { Application } from '@components/layout'
import { Home as SubHome } from '@pages/Home'

/**
 * The main conversion home page.
 */
// eslint-disable-next-line import/no-default-export
export default function Home() {
  return <SubHome />
}

/**
 * Defines the layout component for this page.
 *
 * @param page - The React page comonent.
 */
Home.getLayout = (page: ReactElement) => (
  <Application
    maxWidth={1600}
    pageHeading={<Trans i18nKey={`pages-home:page_heading`} />}
  >
    {page}
  </Application>
)
