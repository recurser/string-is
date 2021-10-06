import { majorScale, Pane } from 'evergreen-ui'

import { Link } from '@components/navigation'
import { ROUTE_PRIVACY, ROUTE_SECURITY, ROUTE_TERMS } from '@services/Routes'

export const Footer = (): React.ReactElement => {
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
        {'security'}
      </Link>
      &middot;
      <Link color="neutral" href={ROUTE_PRIVACY} size={300}>
        {'privacy'}
      </Link>
      &middot;
      <Link color="neutral" href={ROUTE_TERMS} size={300}>
        {'terms'}
      </Link>
    </Pane>
  )
}
