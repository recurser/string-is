import {
  Paragraph as BaseParagraph,
  ParagraphProps,
  minorScale,
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
