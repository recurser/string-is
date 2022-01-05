import { majorScale, Select } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef } from 'react'

import { CodeTextarea, Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const MarkdownOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-markdownOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const onChangeTabWidth = (event: ChangeEvent<HTMLSelectElement>) => {
      const tabWidth = parseInt(event.target.value, 10)
      setOptions({ ...options, tabWidth })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          htmlFor="indentInput"
          label={t('indent_label')}
        >
          <Select
            disabled={disabled}
            id="indentInput"
            maxWidth={majorScale(15)}
            onChange={onChangeTabWidth}
            value={options.tabWidth as number}
          >
            <option value={2}>{t('2_spaces_option')}</option>
            <option value={4}>{t('4_spaces_option')}</option>
          </Select>
        </Label>

        <CodeTextarea {...props} ref={ref} value={output} />
      </Form>
    )
  },
)
