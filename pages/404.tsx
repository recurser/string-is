import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { NotFound as SubNotFound } from '@pages/errors/NotFound'

// eslint-disable-next-line import/no-default-export
export default function NotFound() {
  return <SubNotFound />
}

NotFound.getLayout = (page: ReactElement) => <Application>{page}</Application>
