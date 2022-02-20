import { ChangeEvent, forwardRef } from 'react'
import { Select, majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, Form, Label } from '@components/forms'
import { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const ShaOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for generating SHA hashes.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-shaOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    /**
     * Updates the output options state when the algorithm dropdown is changed.
     *
     * @param event - the HTML select change event.
     */
    const onChangeAlgorithm = (event: ChangeEvent<HTMLSelectElement>) => {
      setOptions({ ...options, algorithm: event.target.value })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          htmlFor="algorithmInput"
          label={t('algorithm_label')}
        >
          <Select
            disabled={disabled}
            id="algorithmInput"
            maxWidth={majorScale(12)}
            onChange={onChangeAlgorithm}
            value={options.algorithm as string}
          >
            <option value={'sha1'}>{t('sha_1_option')}</option>
            <option value={'sha224'}>{t('sha_224_option')}</option>
            <option value={'sha256'}>{t('sha_256_option')}</option>
            <option value={'sha384'}>{t('sha_384_option')}</option>
            <option value={'sha512'}>{t('sha_512_option')}</option>
          </Select>
        </Label>

        <CodeTextarea
          {...props}
          data-testid="sha-output"
          disabled={disabled}
          id="converted-output"
          ref={ref}
          value={output}
        />
      </Form>
    )
  },
)
