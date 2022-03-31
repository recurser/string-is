import { ChangeEvent, forwardRef } from 'react'
import { Select, majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Form, Label, MarkdownTextarea } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const MarkdownOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting Markdown output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-markdownOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    /**
     * Updates the output options state when the tab-width dropdown is changed.
     *
     * @param event - the HTML select change event.
     */
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

        <MarkdownTextarea
          {...props}
          disabled={disabled}
          ref={ref}
          value={output}
        />
      </Form>
    )
  },
)
