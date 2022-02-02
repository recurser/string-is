import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Privacy as SubPrivacy } from '@pages/Privacy'

/**
 * Describes the privacy policy.
 */
// eslint-disable-next-line import/no-default-export
export default function Privacy() {
  return <SubPrivacy />
}

/**
 * Defines the layout component for this page.
 *
 * @param page - The React page comonent.
 */
Privacy.getLayout = (page: ReactElement) => <Application>{page}</Application>
