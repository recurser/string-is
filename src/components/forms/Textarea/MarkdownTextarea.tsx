import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-markdown'

export const MarkdownTextarea = forwardRef<
  HTMLTextAreaElement,
  CodeTextareaProps
>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="markdown-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

MarkdownTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.markdown, 'markdown'),
}
