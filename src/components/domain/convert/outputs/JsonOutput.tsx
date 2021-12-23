import { Checkbox, majorScale, Select } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { CodeTextarea, Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const JsonOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-jsonOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

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
          label={t('indentLabel')}
        >
          <Select
            disabled={disabled}
            id="indentInput"
            maxWidth={majorScale(15)}
            onChange={onChangeSpace}
            value={options.space as string}
          >
            <option value={'  '}>{t('2SpacesOption')}</option>
            <option value={'    '}>{t('4SpacesOption')}</option>
            <option value={'\t'}>{t('1TabOption')}</option>
          </Select>
        </Label>

        <Label
          disabled={disabled}
          htmlFor="sortKeysInput"
          label={t('sortKeysLabel')}
        >
          <Checkbox
            checked={options.sortKeys as boolean}
            disabled={disabled}
            id="sortKeysInput"
            onChange={onChangeSortKeys}
          />
        </Label>

        <CodeTextarea {...props} ref={ref} value={value} />
      </Form>
    )
  },
)
