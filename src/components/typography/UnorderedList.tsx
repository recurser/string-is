import {
  UnorderedList as BaseUnorderedList,
  UnorderedListProps,
  minorScale,
} from 'evergreen-ui'
import { ReactElement } from 'react'

/**
 * Wraps the Evergreen UI UnorderedList component, in order to
 * define some standard default styles.
 *
 * @param props - the component props.
 */
export const UnorderedList = ({
  children,
  ...props
}: UnorderedListProps): ReactElement => (
  <BaseUnorderedList {...props}>{children}</BaseUnorderedList>
)

UnorderedList.defaultProps = {
  marginBottom: minorScale(3),
}
