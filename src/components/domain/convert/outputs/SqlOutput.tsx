import { ChangeEvent, forwardRef } from 'react'
import { Checkbox, Select, majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Form, Label, SqlTextarea } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * The available SQL dialects which we can format with.
 */
const dialects = [
  'db2',
  'mariadb',
  'mysql',
  'n1ql',
  'plsql',
  'postgresql',
  'redshift',
  'spark',
  'sql',
  'tsql',
]

/**
 * Forwards the Textarea ref to the output component.
 */
export const SqlOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting HTML output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-sqlOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    /**
     * Updates the output options state when the indent dropdown is changed.
     *
     * @param event - the HTML select change event.
     */
    const onChangeIndent = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, indent: event.target.value })
    }

    /**
     * Updates the output options state when the language dropdown is changed.
     *
     * @param event - the HTML select change event.
     */
    const onChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, language: event.target.value })
    }

    /**
     * Updates the output options state when the upper-case checkbox is changed.
     *
     * @param event - the HTML checkbox change event.
     */
    const onChangeUpperCase = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, uppercase: event.target.checked })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          htmlFor="indentInput"
          label={t('language_label')}
        >
          <Select
            disabled={disabled}
            id="languageInput"
            maxWidth={majorScale(15)}
            onChange={onChangeLanguage}
            value={options.language as string}
          >
            {dialects.map((dialect) => (
              <option key={`option-${dialect}`} value={dialect}>
                {t(`dialect_${dialect}`)}
              </option>
            ))}
          </Select>
        </Label>

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
            value={options.indent as string}
          >
            <option value={'  '}>{t('2_spaces_option')}</option>
            <option value={'    '}>{t('4_spaces_option')}</option>
            <option value={'\t'}>{t('1_tab_option')}</option>
          </Select>
        </Label>

        <Label
          disabled={disabled}
          htmlFor="upperCaseInput"
          label={t('upper_case_label')}
        >
          <Checkbox
            checked={options.uppercase as boolean}
            disabled={disabled}
            id="upperCaseInput"
            onChange={onChangeUpperCase}
          />
        </Label>

        <SqlTextarea
          {...props}
          data-testid="sql-output"
          disabled={disabled}
          id="converted-output"
          ref={ref}
          value={output}
        />
      </Form>
    )
  },
)
