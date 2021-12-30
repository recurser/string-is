import { Checkbox, majorScale, Select } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef } from 'react'

import { CodeTextarea, Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const JsonOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-jsonOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, space: event.target.value })
    }

    const onChangeSortKeys = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, sortKeys: event.target.checked })
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
            onChange={onChangeSpace}
            value={options.space as string}
          >
            <option value={'  '}>{t('2_spaces_option')}</option>
            <option value={'    '}>{t('4_spaces_option')}</option>
            <option value={'\t'}>{t('1_tab_option')}</option>
          </Select>
        </Label>

        <Label
          disabled={disabled}
          htmlFor="sortKeysInput"
          label={t('sort_keys_label')}
        >
          <Checkbox
            checked={options.sortKeys as boolean}
            disabled={disabled}
            id="sortKeysInput"
            onChange={onChangeSortKeys}
          />
        </Label>

        <CodeTextarea {...props} ref={ref} value={output} />
      </Form>
    )
  },
)
