import { majorScale, Pane } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Link } from '@components/navigation'
import {
  ROUTE_CONTACT,
  ROUTE_PRIVACY,
  ROUTE_SECURITY,
  ROUTE_TERMS,
} from '@services/Routes'

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
      <Link color="neutral" href={ROUTE_CONTACT} size={300}>
        {t('contact')}
      </Link>
    </Pane>
  )
}
