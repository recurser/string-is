import { Link as Anchor, LinkProps } from 'evergreen-ui'
import { PropsWithChildren, ReactElement } from 'react'
import BaseLink from 'next/link'

interface Props extends LinkProps {
  href: string // This is optional in LinkProps, but we want to enforce it.
}

export const Link = ({
  children,
  color,
  href,
  lineHeight,
  size,
  target,
  ...props
}: PropsWithChildren<Props>): ReactElement => (
  <BaseLink href={href} {...props}>
    <Anchor
      color={color}
      href={href}
      lineHeight={lineHeight}
      role="link"
      size={size}
      target={target}
    >
      {children}
    </Anchor>
  </BaseLink>
)
