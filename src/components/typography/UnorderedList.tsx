import {
  minorScale,
  UnorderedList as BaseUnorderedList,
  UnorderedListProps,
} from 'evergreen-ui'
import { ReactElement } from 'react'

export const UnorderedList = ({
  children,
  ...props
}: UnorderedListProps): ReactElement => (
  <BaseUnorderedList {...props}>{children}</BaseUnorderedList>
)

UnorderedList.defaultProps = {
  marginBottom: minorScale(3),
}
