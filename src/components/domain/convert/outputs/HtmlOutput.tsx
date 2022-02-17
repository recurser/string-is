import { ChangeEvent, forwardRef, useState } from 'react'
import { Select, Text, TextInput, majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, Form, Label } from '@components/forms'
import { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const HtmlOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting HTML output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-htmlOutput')
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
        >
          <TextInput
            disabled={disabled}
            id="printWidthInput"
            maxWidth={majorScale(15)}
            onChange={onChangePrintWidth}
            type="number"
            value={options.printWidth as number}
          />
          <Text>&nbsp;{t('characters_suffix')}</Text>
        </Label>

        <CodeTextarea
          {...props}
          data-testid="html-output"
          disabled={disabled}
          ref={ref}
          value={output}
        />
      </Form>
    )
  },
)
