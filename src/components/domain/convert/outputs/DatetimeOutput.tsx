import {
  Button,
  HelpIcon,
  IconButton,
  Link,
  majorScale,
  SelectMenu,
  SelectMenuItem,
  Textarea,
  TextInput,
} from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { Form, Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import {
  defaultOptions,
  relativeOutput,
  utcOutput,
} from '@lib/outputs/DatetimeOutput'
import { OutputProps } from '@lib/types'
import { timezones } from '@lib/utilities/Timezones'

export const DatetimeOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-datetimeOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

    const relativeValue = useMemo(() => {
      return relativeOutput(input, options)
    }, [input, options])

    const utcValue = useMemo(() => {
      return utcOutput(input, options)
    }, [input, options])

    const onSelectTimezone = (selected: SelectMenuItem) => {
      setOptions({ ...options, timezone: selected.value })
    }

    const onChangeFormat = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, format: event.target.value })
    }

    return (
      <Form>
        <Label
          disabled={disabled}
          inputId="timezoneInput"
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
            <Button disabled={disabled} maxWidth={majorScale(32)}>
              {options.timezone}
            </Button>
          </SelectMenu>
        </Label>

        <Label
          disabled={disabled}
          inputId="formatInput"
          label={t('label_format')}
        >
          <TextInput
            disabled={disabled}
            id="formatInput"
            maxWidth={majorScale(27)}
            onChange={onChangeFormat}
            placeholder={defaultOptions.format}
            value={options.format as string}
          />
          <IconButton
            disabled={disabled}
            href="https://day.js.org/docs/en/display/format"
            icon={HelpIcon}
            is={Link}
            marginLeft={majorScale(1)}
            target="_blank"
          />
        </Label>

        <hr />

        <Label
          disabled={disabled}
          inputId="localTimeInput"
          label={t('label_local_time')}
        >
          <Textarea
            {...props}
            disabled={disabled}
            height={majorScale(4)}
            id="localTimeInput"
            maxWidth={majorScale(32)}
            minHeight={undefined}
            readOnly={true}
            ref={ref}
            resize="none"
            value={value}
          />
        </Label>

        <Label
          disabled={disabled}
          inputId="utcTimeInput"
          label={t('label_utc_time')}
        >
          <TextInput
            disabled={disabled}
            maxWidth={majorScale(32)}
            readOnly={true}
            value={utcValue}
          />
        </Label>

        <Label
          disabled={disabled}
          inputId="relativeTimeInput"
          label={t('label_relative_time')}
        >
          <TextInput
            disabled={disabled}
            id="relativeTimeInput"
            maxWidth={majorScale(32)}
            readOnly={true}
            value={relativeValue}
          />
        </Label>
      </Form>
    )
  },
)
