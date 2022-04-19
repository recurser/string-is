import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-diff'

export const DiffTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="diff-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

DiffTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.diff, 'diff'),
}
