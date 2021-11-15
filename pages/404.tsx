import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { NotFound as SubNotFound } from '@pages/errors/NotFound'
import { useAnalytics } from '@services/Analytics'

// eslint-disable-next-line import/no-default-export
export default function NotFound() {
  const analytics = useAnalytics()

  analytics('404', {
    props: {
      path: document.location.pathname,
    },
  })

  return <SubNotFound />
}

NotFound.getLayout = (page: ReactElement) => <Application>{page}</Application>
