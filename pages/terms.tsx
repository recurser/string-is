import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { Terms as SubTerms } from '@pages/Terms'

// eslint-disable-next-line import/no-default-export
export default function Terms() {
  return <SubTerms />
}

Terms.getLayout = (page: ReactElement) => <Application>{page}</Application>
