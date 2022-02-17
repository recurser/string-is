import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { About as SubAbout } from '@pages/About'

/**
 * An explanatory page describing the project and its goals.
 */
// eslint-disable-next-line import/no-default-export
export default function About() {
  return <SubAbout />
}

/**
 * Defines the layout component for this page.
 *
 * @param page - The React page comonent.
 */
About.getLayout = (page: ReactElement) => <Application>{page}</Application>
