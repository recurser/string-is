import { Pane, majorScale } from 'evergreen-ui'
import { ReactElement } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { ROUTE_PRIVACY, ROUTE_SECURITY, ROUTE_TERMS } from '@services/Routes'
import { Link } from '@components/navigation'

/**
 * Renders the standard page footer with links to informational
 * pages (security, terms etc).
 */
export const Footer = (): ReactElement => {
  const { t } = useTranslation('layout-footer')

  return (
    <Pane
      alignItems="center"
      display="flex"
      flexDirection="row"
      gap={majorScale(1)}
      justifyContent="center"
      marginTop={majorScale(3)}
      opacity={0.6}
    >
      <Link color="neutral" href={ROUTE_SECURITY} size={300}>
        {t('security')}
      </Link>
      &middot;
      <Link color="neutral" href={ROUTE_PRIVACY} size={300}>
        {t('privacy')}
      </Link>
      &middot;
      <Link color="neutral" href={ROUTE_TERMS} size={300}>
        {t('terms')}
      </Link>
      &middot;
      <Link
        color="neutral"
        href="https://plausible.io/string.is"
        size={300}
        target="_blank"
      >
        {t('analytics')}
      </Link>
    </Pane>
  )
}
