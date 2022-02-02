import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Terms as SubTerms } from '@pages/Terms'

/**
 * Describes the terms of use.
 */
// eslint-disable-next-line import/no-default-export
export default function Terms() {
  return <SubTerms />
}

/**
 * Defines the layout component for this page.
 *
 * @param page - The React page comonent.
 */
Terms.getLayout = (page: ReactElement) => <Application>{page}</Application>
