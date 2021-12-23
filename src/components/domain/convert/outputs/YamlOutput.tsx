import { Checkbox, majorScale, Select } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { CodeTextarea, Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const YamlOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-yamlOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

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
          inputId="sortKeysInput"
          label={t('sortKeysLabel')}
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
          inputId="forceQuotesInput"
          label={t('forceQuotesLabel')}
        >
          <Checkbox
            checked={options.forceQuotes as boolean}
            disabled={disabled}
            id="forceQuotesInput"
            onChange={onChangeForceQuotes}
          />
        </Label>

        <Label
          disabled={disabled}
          inputId="indentInput"
          label={t('indentLabel')}
        >
          <Select
            disabled={disabled}
            id="indentInput"
            maxWidth={majorScale(15)}
            onChange={onChangeIndent}
            value={options.indent as number}
          >
            <option value={2}>{t('2SpacesOption')}</option>
            <option value={4}>{t('4SpacesOption')}</option>
          </Select>
        </Label>

        <CodeTextarea {...props} disabled={disabled} ref={ref} value={value} />
      </Form>
    )
  },
)
