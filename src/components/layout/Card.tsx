import { Card as BaseCard, CardProps, Pane, majorScale } from 'evergreen-ui'
import { ReactElement } from 'react'
import { styled } from '@compiled/react'

import { Heading } from '@components/typography'
import { MOBILE } from '@services/Breakpoints'

/**
 * The top-level <Card /> component.
 */
const ResponsiveBaseCard = styled(BaseCard)`
  @media only screen and (max-width: ${MOBILE}px) {
    box-shadow: none;
  }
`

interface Props extends CardProps {
  /**
   * The child components that will be wrapped inside the card.
   */
  children: ReactElement | ReactElement[]

  /**
   * An optional title for the card.
   */
  title?: string
}

/**
 * Wraps the Evergreen UI 'Card' component with standard shadow,
 * title, padding etc.
 *
 * @param props - the component props.
 */
export const Card = ({
  children: childOrChildren,
  elevation,
  title,
  padding,
  ...props
}: Props): ReactElement => {
  const children = Array.isArray(childOrChildren)
    ? childOrChildren
    : [childOrChildren]

  const actionComponents = children.filter(
    (child) => child.key === 'card-actions',
  )
  const childComponents = children.filter(
    (child) => !['card-actions', 'card-title'].includes(child.key as string),
  )
  const titleComponents = children.filter((child) => child.key === 'card-title')
  const showHeader =
    titleComponents?.length > 0 || actionComponents?.length > 0 || title

  return (
    <ResponsiveBaseCard {...props} elevation={elevation} padding={0}>
      {showHeader ? (
        <Pane
          borderBottom="default"
          flexDirection="row"
          justifyContent="space-between"
          padding={majorScale(2)}
        >
          {titleComponents.length > 0 ? (
            <Pane justifyContent="center">{titleComponents}</Pane>
          ) : null}
          {title ? (
            <Pane justifyContent="center">
              <Heading margin={0} role="heading">
                {title}
              </Heading>
            </Pane>
          ) : null}
          {actionComponents.length > 0 ? (
            <Pane justifyContent="center">{actionComponents}</Pane>
          ) : null}
        </Pane>
      ) : null}

      <Pane padding={padding}>{childComponents}</Pane>
    </ResponsiveBaseCard>
  )
}

Card.defaultProps = {
  backgroundColor: 'white',
  display: 'flex',
  elevation: 1,
  flexDirection: 'column',
  padding: majorScale(3),
  width: '100%',
}
