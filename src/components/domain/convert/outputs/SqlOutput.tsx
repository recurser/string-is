import { ChangeEvent, forwardRef, useState } from 'react'
import { Select, majorScale } from 'evergreen-ui'
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
  'sqlite',
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
    const [space, setSpace] = useState(
      (options.useTabs ? '\t' : ' ').repeat(options.tabWidth as number),
    )

    /**
     * Updates the output options state when the tabWidth dropdown is changed.
     *
     * @param event - the HTML select change event.
     */
    const onChangeTabWidth = (event: ChangeEvent<HTMLSelectElement>) => {
      const spc = event.target.value
      const useTabs = spc[0] === '\t'
      const tabWidth = spc.split('').length
      setOptions({ ...options, tabWidth, useTabs })
      setSpace(event.target.value)
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
     * Updates the output options state when the keyword-case dropdown is changed.
     *
     * @param event - the  HTML select change event.
     */
    const onChangeKeywordCase = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, keywordCase: event.target.value })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          htmlFor="languageInput"
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
          htmlFor="tabWidthInput"
          label={t('tab_width_label')}
        >
          <Select
            disabled={disabled}
            id="tabWidthInput"
            maxWidth={majorScale(15)}
            onChange={onChangeTabWidth}
            value={space}
          >
            <option value={'  '}>{t('2_spaces_option')}</option>
            <option value={'    '}>{t('4_spaces_option')}</option>
            <option value={'\t'}>{t('1_tab_option')}</option>
          </Select>
        </Label>

        <Label
          disabled={disabled}
          htmlFor="keywordCaseInput"
          label={t('keyword_case_label')}
        >
          <Select
            disabled={disabled}
            id="keywordCaseInput"
            maxWidth={majorScale(15)}
            onChange={onChangeKeywordCase}
            value={options.keywordCase as string}
          >
            <option value={'upper'}>{t('keyword_upper_case_option')}</option>
            <option value={'lower'}>{t('keyword_lower_case_option')}</option>
          </Select>
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
