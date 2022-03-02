import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism.css'

export const HtmlTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="html-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

HtmlTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.markup, 'markup'),
}
