import {
  Button,
  HelpIcon,
  IconButton,
  Link,
  majorScale,
  Pane,
  SelectMenu,
  SelectMenuItem,
  Textarea,
  TextInput,
} from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef, useMemo } from 'react'

import { Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import {
  defaultOptions,
  relativeOutput,
  utcOutput,
} from '@lib/outputs/DatetimeOutput'
import { OutputProps } from '@lib/types'
import { timezones } from '@lib/utilities/Timezones'

export const DatetimeOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, input, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-datetimeOutput')
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const value = useMemo(() => {
      return converter.operation(input, options)
    }, [input, converter, options])

    const relativeValue = useMemo(() => {
      return relativeOutput(input, options)
    }, [input, options, relativeOutput])

    const utcValue = useMemo(() => {
      return utcOutput(input, options)
    }, [input, options, utcOutput])

    const onSelectTimezone = (selected: SelectMenuItem) => {
      setOptions({ ...options, timezone: selected.value })
    }

    const onChangeFormat = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, format: event.target.value })
    }

    return (
      <>
        <Pane
          display="flex"
          flexDirection="column"
          gap={majorScale(2)}
          marginBottom={majorScale(1)}
        >
          <Pane>
            <Label label={t('label_timezone')}>
              <SelectMenu
                closeOnSelect={true}
                onSelect={onSelectTimezone}
                options={timezones.map((timezone) => ({
                  label: timezone.name,
                  value: timezone.tzCode,
                }))}
                selected={options.timezone as string}
              >
                <Button flex={1} maxWidth={majorScale(32)}>
                  {options.timezone}
                </Button>
              </SelectMenu>
            </Label>

            <Label label={t('label_format')}>
              <TextInput
                flex={1}
                maxWidth={majorScale(27)}
                onChange={onChangeFormat}
                placeholder={defaultOptions.format}
                value={options.format as string}
              />
              <IconButton
                href="https://day.js.org/docs/en/display/format"
                icon={HelpIcon}
                is={Link}
                marginLeft={majorScale(1)}
                target="_blank"
              />
            </Label>
          </Pane>
        </Pane>

        <hr />

        <Label label={t('label_local_time')}>
          <Textarea
            {...props}
            height={majorScale(4)}
            maxWidth={majorScale(32)}
            minHeight={undefined}
            ref={ref}
            resize="none"
            value={value}
          />
        </Label>

        <Label label={t('label_utc_time')}>
          <TextInput
            flex={1}
            maxWidth={majorScale(32)}
            readOnly={true}
            value={utcValue}
          />
        </Label>

        <Label label={t('label_relative_time')}>
          <TextInput
            flex={1}
            maxWidth={majorScale(32)}
            readOnly={true}
            value={relativeValue}
          />
        </Label>
      </>
    )
  },
)
