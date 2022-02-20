import {
  Button,
  HelpIcon,
  IconButton,
  Link,
  SelectMenu,
  SelectMenuItem,
  TextInput,
  Textarea,
  Tooltip,
  majorScale,
} from 'evergreen-ui'
import { ChangeEvent, forwardRef, useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { CopyButton, Form, Label } from '@components/forms'
import {
  defaultOptions,
  relativeOutput,
  timestampOutput,
  utcOutput,
} from '@lib/outputs/DatetimeOutput'
import { OutputProps } from '@lib/types'
import { timezones } from '@lib/utilities/Timezones'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

/**
 * Forwards the Textarea ref to the output component.
 */
export const DatetimeOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  /**
   * Provides a UI for formatting DateTime output.
   *
   * @param props - The output props.
   * @param ref   - The forwarded ref, which becomes a reference to the TextArea.
   */
  ({ converter, disabled, input, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-datetimeOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const relativeValue = useMemo(() => {
      return relativeOutput(input, options)
    }, [input, options])

    const timestampValue = useMemo(() => {
      return timestampOutput(input)
    }, [input])

    const utcValue = useMemo(() => {
      return utcOutput(input, options)
    }, [input, options])

    /**
     * Updates the output options state when the timezone select box is changed.
     *
     * @param event - the select menu change event.
     */
    const onSelectTimezone = (selected: SelectMenuItem) => {
      setOptions({ ...options, timezone: selected.value })
    }

    /**
     * Updates the output options state when the date-format input is changed.
     *
     * @param event - the HTML input change event.
     */
    const onChangeFormat = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, format: event.target.value })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          htmlFor="timezoneInput"
          label={t('label_timezone')}
        >
          <SelectMenu
            closeOnSelect={true}
            onSelect={onSelectTimezone}
            options={timezones.map((timezone) => ({
              label: timezone.name,
              value: timezone.tzCode,
            }))}
            selected={options.timezone as string}
          >
            <Button disabled={disabled} maxWidth={majorScale(25)}>
              {options.timezone}
            </Button>
          </SelectMenu>
        </Label>

        <Label
          disabled={disabled}
          htmlFor="formatInput"
          label={t('label_format')}
        >
          <TextInput
            disabled={disabled}
            id="formatInput"
            maxWidth={majorScale(25)}
            onChange={onChangeFormat}
            placeholder={defaultOptions.format}
            value={options.format as string}
          />
          <Tooltip content={t('format_tooltip')}>
            <IconButton
              disabled={disabled}
              href="https://day.js.org/docs/en/display/format"
              icon={HelpIcon}
              is={Link}
              marginLeft={majorScale(1)}
              target="_blank"
            />
          </Tooltip>
        </Label>

        <hr />

        <Label
          disabled={disabled}
          htmlFor="converted-output"
          label={t('label_local_time')}
        >
          <Textarea
            {...props}
            data-testid="datetime-local-output"
            disabled={disabled}
            flex="none"
            height={majorScale(4)}
            id="converted-output"
            maxWidth={majorScale(25)}
            minHeight={undefined}
            readOnly={true}
            ref={ref}
            resize="none"
            value={output}
          />
          <CopyButton
            disabled={disabled}
            marginLeft={majorScale(1)}
            value={output}
          />
        </Label>

        <Label
          disabled={disabled}
          htmlFor="utcTimeInput"
          label={t('label_utc_time')}
        >
          <TextInput
            data-testid="datetime-utc-output"
            disabled={disabled}
            maxWidth={majorScale(25)}
            readOnly={true}
            value={utcValue}
          />
          <CopyButton
            disabled={disabled}
            marginLeft={majorScale(1)}
            value={utcValue}
          />
        </Label>

        <Label
          disabled={disabled}
          htmlFor="relativeTimeInput"
          label={t('label_relative_time')}
        >
          <TextInput
            disabled={disabled}
            id="relativeTimeInput"
            maxWidth={majorScale(25)}
            readOnly={true}
            value={relativeValue}
          />
          <CopyButton
            disabled={disabled}
            marginLeft={majorScale(1)}
            value={relativeValue}
          />
        </Label>

        <Label
          disabled={disabled}
          htmlFor="timestampInput"
          label={t('label_timestamp')}
        >
          <TextInput
            disabled={disabled}
            id="timestampInput"
            maxWidth={majorScale(25)}
            readOnly={true}
            value={timestampValue}
          />
          <CopyButton
            disabled={disabled}
            marginLeft={majorScale(1)}
            value={timestampValue}
          />
        </Label>
      </Form>
    )
  },
)
