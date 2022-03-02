import { ReactElement, forwardRef } from 'react'
import { highlight, languages } from 'prismjs'

import { CodeTextarea, CodeTextareaProps } from '@components/forms/CodeTextarea'

import 'prismjs/components/prism-csv'
import 'prismjs/themes/prism.css'

export const CsvTextarea = forwardRef<HTMLTextAreaElement, CodeTextareaProps>(
  (props: CodeTextareaProps, ref): ReactElement => (
    <CodeTextarea
      data-testid="csv-output"
      id="converted-output"
      ref={ref}
      {...props}
    />
  ),
)

CsvTextarea.defaultProps = {
  highlight: (code) => highlight(code, languages.csv, 'csv'),
}
