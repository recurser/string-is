import { ChangeEvent, forwardRef } from 'react'
import { Checkbox } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, Form, Label } from '@components/forms'
import { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

export const CsvOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-csvOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

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
          htmlFor="quotesInput"
          label={t('quotes_label')}
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
          htmlFor="headerInput"
          label={t('header_label')}
        >
          <Checkbox
            checked={options.header as boolean}
            disabled={disabled}
            id="headerInput"
            onChange={onChangeHeader}
          />
        </Label>

        <CodeTextarea {...props} disabled={disabled} ref={ref} value={output} />
      </Form>
    )
  },
)
