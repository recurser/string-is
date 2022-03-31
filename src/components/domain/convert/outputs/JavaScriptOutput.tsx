import { ChangeEvent, forwardRef, useState } from 'react'
import { Checkbox, Select, TextInput, majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Form, JavaScriptTextarea, Label } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const JavaScriptOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting JavaScript output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-javaScriptOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )
    const [space, setSpace] = useState(
      (options.useTabs ? '\t' : ' ').repeat(options.tabWidth as number),
    )

    /**
     * Updates the output options state when the print-width dropdown is changed.
     *
     * @param event - the HTML input change event.
     */
    const onChangePrintWidth = (event: ChangeEvent<HTMLInputElement>) => {
      const printWidth = parseInt(event.target.value, 10)
      if (printWidth > 0) {
        setOptions({ ...options, printWidth })
      }
    }

    /**
     * Updates the output options state when the space-character dropdown is changed.
     *
     * @param event - the HTML select change event.
     */
    const onChangeSpace = (event: ChangeEvent<HTMLSelectElement>) => {
      const spc = event.target.value
      const useTabs = spc[0] === '\t'
      const tabWidth = spc.split('').length
      setOptions({ ...options, tabWidth, useTabs })
      setSpace(event.target.value)
    }

    /**
     * Updates the output options state when the enforce-semicolon checkbox is changed.
     *
     * @param event - the HTML checkbox change event.
     */
    const onChangeSemicolon = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, semi: event.target.checked })
    }

    /**
     * Updates the output options state when the enforce-single-quote checkbox is changed.
     *
     * @param event - the HTML checkbox change event.
     */
    const onChangeSingleQuote = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, singleQuote: event.target.checked })
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
            value={space}
          >
            <option value={'  '}>{t('2_spaces_option')}</option>
            <option value={'    '}>{t('4_spaces_option')}</option>
            <option value={'\t'}>{t('1_tab_option')}</option>
          </Select>
        </Label>

        <Label
          disabled={disabled}
          htmlFor="printWidthInput"
          label={t('print_width_label')}
          suffix={t('characters_suffix')}
        >
          <TextInput
            disabled={disabled}
            id="printWidthInput"
            maxWidth={majorScale(15)}
            onChange={onChangePrintWidth}
            type="number"
            value={options.printWidth as number}
          />
        </Label>

        <Label
          disabled={disabled}
          htmlFor="semicolonInput"
          label={t('semicolon_label')}
        >
          <Checkbox
            checked={options.semi as boolean}
            disabled={disabled}
            id="semicolonInput"
            onChange={onChangeSemicolon}
          />
        </Label>

        <Label
          disabled={disabled}
          htmlFor="singleQuoteInput"
          label={t('single_quote_label')}
        >
          <Checkbox
            checked={options.singleQuote as boolean}
            disabled={disabled}
            id="singleQuoteInput"
            onChange={onChangeSingleQuote}
          />
        </Label>

        <JavaScriptTextarea
          {...props}
          disabled={disabled}
          ref={ref}
          value={output}
        />
      </Form>
    )
  },
)
