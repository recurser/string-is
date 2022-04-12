import { ChangeEvent, forwardRef } from 'react'
import { Checkbox } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { Form, Label, TomlTextarea } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const TomlOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting TOML output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-tomlOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    /**
     * Updates the output options state when the sort-keys checkbox is changed.
     *
     * @param event - the HTML checkbox change event.
     */
    const onChangeSortKeys = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, sortKeys: event.target.checked })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          htmlFor="sortKeysInput"
          label={t('sort_keys_label')}
        >
          <Checkbox
            checked={options.sortKeys as boolean}
            disabled={disabled}
            id="sortKeysInput"
            onChange={onChangeSortKeys}
          />
        </Label>

        <TomlTextarea {...props} disabled={disabled} ref={ref} value={output} />
      </Form>
    )
  },
)
