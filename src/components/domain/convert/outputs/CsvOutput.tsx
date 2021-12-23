import { Checkbox } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { CodeTextarea, Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { OutputProps } from '@lib/types'

export const CsvOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-csvOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

    const onChangeHeader = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, header: event.target.checked })
    }

    const onChangeQuotes = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, quotes: event.target.checked })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          inputId="quotesInput"
          label={t('quotesLabel')}
        >
          <Checkbox
            checked={options.quotes as boolean}
            disabled={disabled}
            id="quotesInput"
            onChange={onChangeQuotes}
          />
        </Label>

        <Label
          disabled={disabled}
          inputId="headerLabelInput"
          label={t('headerLabel')}
        >
          <Checkbox
            checked={options.header as boolean}
            disabled={disabled}
            id="headerLabelInput"
            onChange={onChangeHeader}
          />
        </Label>

        <CodeTextarea {...props} ref={ref} value={value} />
      </Form>
    )
  },
)
