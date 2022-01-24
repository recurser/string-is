import { Heading as BaseHeading, HeadingProps, minorScale } from 'evergreen-ui'
import { ReactElement } from 'react'

export const Heading = ({ children, ...props }: HeadingProps): ReactElement => (
  <BaseHeading {...props}>{children}</BaseHeading>
)

Heading.defaultProps = {
  marginBottom: minorScale(3),
  marginTop: minorScale(3),
  size: 400,
}
