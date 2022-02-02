import {
  OrderedList as BaseOrderedList,
  OrderedListProps,
  minorScale,
} from 'evergreen-ui'
import { ReactElement } from 'react'

/**
 * Wraps the Evergreen UI OrderedList component, in order to
 * define some standard default styles.
 *
 * @param props - the component props.
 */
export const OrderedList = ({
  children,
  ...props
}: OrderedListProps): ReactElement => (
  <BaseOrderedList {...props}>{children}</BaseOrderedList>
)

OrderedList.defaultProps = {
  marginBottom: minorScale(3),
}
