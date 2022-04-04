import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-yaml'

export const YamlTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="yaml-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

YamlTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.yaml, 'yaml'),
}
