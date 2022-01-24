import {
  OrderedList as BaseOrderedList,
  OrderedListProps,
  minorScale,
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
