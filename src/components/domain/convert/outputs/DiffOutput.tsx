import { Alert, Checkbox, majorScale } from 'evergreen-ui'
import { ChangeEvent, forwardRef, useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, DiffTextarea, Label } from '@components/forms'
import type { OutputProps } from '@lib/types'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const DiffOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for generating diff output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, input, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-diffOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )
    const compareString = (options.compareString || '') as string

    // This is a bit of a hack to provide a test string when 'load an example' is clicked.
    useEffect(() => {
      if (
        input === t('pages-converter:diffCompare-examples.example-1') &&
        compareString === ''
      ) {
        setOptions({
          ...options,
          compareString:
            "http.createServer(function (req, res) {\n  res.writeHead(200, {'Content-Type': 'text/html'});\n  res.end('<p>Hello World!<p>');\n}).listen(8080);\n",
        })
      }
    }, [input, options, setOptions, t, compareString])

    /**
     * Updates the output options state when the test-string text input is changed.
     *
     * @param event - the HTML input change event.
     */
    const onChangeCompareString = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setOptions({ ...options, compareString: event.target.value })
    }

    /**
     * Updates the output options state when the suppress-index checkbox is changed.
     *
     * @param event - the HTML checkbox change event.
     */
    const onChangeSuppressIndex = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, suppressIndex: event.target.checked })
    }

    const hasCompareString = compareString.trim().length > 0

    return (
      <>
        <Label
          disabled={disabled}
          htmlFor="suppressIndexInput"
          label={t('suppress_input_label')}
        >
          <Checkbox
            checked={options.suppressIndex as boolean}
            disabled={disabled}
            id="suppressIndexInput"
            onChange={onChangeSuppressIndex}
          />
        </Label>

        <Label
          alignItems="start"
          disabled={disabled}
          flexDirection="column"
          htmlFor="compare-input"
          label={t('compare_string_label')}
        >
          <CodeTextarea
            {...props}
            copy={false}
            data-testid="compare-input"
            disabled={disabled}
            id="compare-input"
            isInvalid={!disabled && !hasCompareString}
            marginBottom={disabled ? 0 : majorScale(1)}
            onChange={onChangeCompareString}
            placeholder={t('compare_string_placeholder')}
            readOnly={false}
            ref={ref}
            value={disabled ? '' : compareString}
          />
        </Label>

        {!disabled && !hasCompareString ? (
          <Alert
            intent="danger"
            marginBottom={majorScale(1)}
            title={t('alert_no_compare_string')}
          />
        ) : null}

        {true ? (
          <Label
            alignItems="start"
            disabled={disabled}
            flexDirection="column"
            htmlFor="converted-output"
            label={t('diff_output_label')}
          >
            <DiffTextarea
              {...props}
              disabled={disabled}
              id="converted-output"
              readOnly={true}
              value={disabled ? '' : output}
            />
          </Label>
        ) : null}
      </>
    )
  },
)
