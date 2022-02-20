import { ChangeEvent, forwardRef } from 'react'
import { Checkbox } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, Form, Label } from '@components/forms'
import { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const CsvOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting CSV output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-csvOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    /**
     * Updates the output options state when the show-header checkbox is changed.
     *
     * @param event - the HTML input change event.
     */
    const onChangeHeader = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, header: event.target.checked })
    }

    /**
     * Updates the output options state when the use-quotes checkbox is changed.
     *
     * @param event - the HTML input change event.
     */
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

        <CodeTextarea
          {...props}
          data-testid="csv-output"
          disabled={disabled}
          id="converted-output"
          ref={ref}
          value={output}
        />
      </Form>
    )
  },
)
