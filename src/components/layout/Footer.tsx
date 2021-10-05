import { majorScale, Pane } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Link } from '@components/navigation'
import { ROUTE_PRIVACY, ROUTE_SECURITY, ROUTE_TERMS } from '@services/Routes'

export const Footer = (): React.ReactElement => {
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
      <Link color="neutral" href={ROUTE_SECURITY}>
        {t('security')}
      </Link>
      &middot;
      <Link color="neutral" href={ROUTE_PRIVACY}>
        {t('privacy')}
      </Link>
      &middot;
      <Link color="neutral" href={ROUTE_TERMS}>
        {t('terms')}
      </Link>
    </Pane>
  )
}
