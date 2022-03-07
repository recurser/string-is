import type { ReactElement } from 'react'

import { Application } from '@components/layout'
import { NotFound as SubNotFound } from '@pages/errors/NotFound'

/**
 * Displays a styled 404 page.
 */
// eslint-disable-next-line import/no-default-export
export default function NotFound() {
  return <SubNotFound />
}

/**
 * Defines the layout component for this page.
 *
 * @param page - The React page component.
 */
NotFound.getLayout = (page: ReactElement) => <Application>{page}</Application>
