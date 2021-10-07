import {
  Card as BaseCard,
  CardProps,
  Heading,
  majorScale,
  Pane,
} from 'evergreen-ui'

import { useBreakpoints } from '@services/Responsive'

interface Props extends CardProps {
  children: React.ReactElement | React.ReactElement[]
  title?: string
}

export const Card = ({
  children: childOrChildren,
  elevation,
  title,
  padding,
  ...props
}: Props): React.ReactElement => {
  const { isMobile } = useBreakpoints()
  const responsiveElevation = isMobile ? undefined : elevation
  const responsivePadding =
    padding === 0 ? 0 : isMobile ? majorScale(2) : padding
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
    <BaseCard {...props} elevation={responsiveElevation} padding={0}>
      {showHeader && (
        <Pane
          borderBottom="default"
          flexDirection="row"
          justifyContent="space-between"
          padding={majorScale(2)}
        >
          {titleComponents.length > 0 && (
            <Pane justifyContent="center">{titleComponents}</Pane>
          )}
          {title && (
            <Pane justifyContent="center">
              <Heading size={400}>{title}</Heading>
            </Pane>
          )}
          {actionComponents.length > 0 && (
            <Pane justifyContent="center">{actionComponents}</Pane>
          )}
        </Pane>
      )}

      <Pane padding={responsivePadding}>{childComponents}</Pane>
    </BaseCard>
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
