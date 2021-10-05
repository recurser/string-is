import { Link as Anchor, LinkProps } from 'evergreen-ui'
import BaseLink from 'next/link'

interface Props extends LinkProps {
  href: string // This is optional in LinkProps, but we want to enforce it.
}

export const Link = ({
  children,
  color,
  href,
  lineHeight,
  target,
  ...props
}: React.PropsWithChildren<Props>): React.ReactElement => (
  <BaseLink href={href} {...props}>
    <Anchor color={color} href={href} lineHeight={lineHeight} target={target}>
      {children}
    </Anchor>
  </BaseLink>
)
