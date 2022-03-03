import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-css'
import 'prismjs/themes/prism.css'

export const CssTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="css-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

CssTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.css, 'css'),
}
