import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { About as SubAbout } from '@pages/About'

// eslint-disable-next-line import/no-default-export
export default function About() {
  return <SubAbout />
}

About.getLayout = (page: ReactElement) => <Application>{page}</Application>
