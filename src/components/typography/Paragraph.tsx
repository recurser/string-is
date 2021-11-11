import {
  minorScale,
  Paragraph as BaseParagraph,
  ParagraphProps,
} from 'evergreen-ui'
import { ReactElement } from 'react'

export const Paragraph = ({
  children,
  ...props
}: ParagraphProps): ReactElement => (
  <BaseParagraph {...props}>{children}</BaseParagraph>
)

Paragraph.defaultProps = {
  marginBottom: minorScale(3),
}
