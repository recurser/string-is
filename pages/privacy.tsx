import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Privacy as SubPrivacy } from '@pages/Privacy'

// eslint-disable-next-line import/no-default-export
export default function Privacy() {
  return <SubPrivacy />
}

Privacy.getLayout = (page: ReactElement) => <Application>{page}</Application>
