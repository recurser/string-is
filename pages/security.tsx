import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Security as SubSecurity } from '@pages/Security'

// eslint-disable-next-line import/no-default-export
export default function Security() {
  return <SubSecurity />
}

Security.getLayout = (page: ReactElement) => <Application>{page}</Application>
