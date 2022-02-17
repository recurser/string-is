import {
  Paragraph as BaseParagraph,
  ParagraphProps,
  minorScale,
} from 'evergreen-ui'
import { ReactElement } from 'react'

/**
 * Wraps the Evergreen UI Paragraph component, in order to
 * define some standard default styles.
 *
 * @param props - the component props.
 */
export const Paragraph = ({
  children,
  ...props
}: ParagraphProps): ReactElement => (
  <BaseParagraph {...props}>{children}</BaseParagraph>
)

Paragraph.defaultProps = {
  marginBottom: minorScale(3),
}
