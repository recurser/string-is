import { Link as Anchor, LinkProps } from 'evergreen-ui'
import { PropsWithChildren, ReactElement } from 'react'
import BaseLink from 'next/link'

interface Props extends LinkProps {
  /**
   * The target href is optional in Evergreen UI LinkProps,
   * but we want to enforce it here.
   */
  href: string
}

/**
 * Wraps the Evergreen UI 'Link' component with a standard Anchor child,
 * allowing us to support command-click etc to open in a new tab.
 *
 * @param props - the component props.
 */
export const Link = ({
  children,
  color,
  href,
  lineHeight,
  size,
  target,
  ...props
}: PropsWithChildren<Props>): ReactElement => (
  <BaseLink href={href} {...props} passHref={true}>
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
