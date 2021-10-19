import type { NextPage } from 'next'

import { NotFound as SubNotFound } from '@pages/errors/NotFound'

const NotFound: NextPage = () => {
  return <SubNotFound />
}

export default NotFound // eslint-disable-line import/no-default-export
