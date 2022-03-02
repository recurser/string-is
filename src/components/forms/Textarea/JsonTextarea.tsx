import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-json'
import 'prismjs/themes/prism.css'

export const JsonTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="json-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

JsonTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.json, 'json'),
}
