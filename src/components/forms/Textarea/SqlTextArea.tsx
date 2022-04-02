import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism.css'

export const SqlTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="sql-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

SqlTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.sql, 'sql'),
}
