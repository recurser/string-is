import { minorScale, Heading as BaseHeading, HeadingProps } from 'evergreen-ui'
import { ReactElement } from 'react'

export const Heading = ({ children, ...props }: HeadingProps): ReactElement => (
  <BaseHeading {...props}>{children}</BaseHeading>
)

Heading.defaultProps = {
  marginBottom: minorScale(3),
  marginTop: minorScale(3),
}
