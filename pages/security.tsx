import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Security as SubSecurity } from '@pages/Security'

/**
 * Describes the security measures taken.
 */
// eslint-disable-next-line import/no-default-export
export default function Security() {
  return <SubSecurity />
}

/**
 * Defines the layout component for this page.
 *
 * @param page - The React page comonent.
 */
Security.getLayout = (page: ReactElement) => <Application>{page}</Application>
