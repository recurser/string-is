import { ChangeEvent, forwardRef } from 'react'
import { Checkbox, Select, majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, Form, Label } from '@components/forms'
import { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

export const YamlOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-yamlOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const onChangeForceQuotes = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, forceQuotes: event.target.checked })
    }

    const onChangeIndent = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, indent: parseInt(event.target.value, 10) })
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
            onChange={onChangeIndent}
            value={options.indent as number}
          >
            <option value={2}>{t('2_spaces_option')}</option>
            <option value={4}>{t('4_spaces_option')}</option>
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

        <Label
          disabled={disabled}
          htmlFor="forceQuotesInput"
          label={t('force_quotes_label')}
        >
          <Checkbox
            checked={options.forceQuotes as boolean}
            disabled={disabled}
            id="forceQuotesInput"
            onChange={onChangeForceQuotes}
          />
        </Label>

        <CodeTextarea {...props} disabled={disabled} ref={ref} value={output} />
      </Form>
    )
  },
)
