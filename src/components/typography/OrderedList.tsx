import {
  minorScale,
  OrderedList as BaseOrderedList,
  OrderedListProps,
} from 'evergreen-ui'
import { ReactElement } from 'react'

export const OrderedList = ({
  children,
  ...props
}: OrderedListProps): ReactElement => (
  <BaseOrderedList {...props}>{children}</BaseOrderedList>
)

OrderedList.defaultProps = {
  marginBottom: minorScale(3),
}
