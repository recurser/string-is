import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-toml'

export const TomlTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="toml-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

TomlTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.toml, 'toml'),
}
