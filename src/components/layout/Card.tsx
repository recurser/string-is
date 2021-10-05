import { Card as BaseCard, CardProps, majorScale } from 'evergreen-ui'

export const Card = (props: CardProps): React.ReactElement => (
  <BaseCard {...props} />
)

Card.defaultProps = {
  backgroundColor: 'white',
  display: 'flex',
  elevation: 1,
  flexDirection: 'column',
  padding: majorScale(3),
  width: '100%',
}
