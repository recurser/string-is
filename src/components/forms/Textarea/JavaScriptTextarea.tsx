import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'

export const JavaScriptTextarea = forwardRef<
  HTMLTextAreaElement,
  CodeTextareaProps
>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="javascript-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

JavaScriptTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.js, 'js'),
}
