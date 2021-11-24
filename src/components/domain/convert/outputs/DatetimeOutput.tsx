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
                <Button flex={1} width={majorScale(24)}>
                  {options.timezone}
                </Button>
              </SelectMenu>
            </Label>

            <Label label={t('label_format')}>
              <TextInput
                flex={1}
                onChange={onChangeFormat}
                placeholder="YYYY-MM-DD HH:mm:ss"
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
            minHeight={undefined}
            ref={ref}
            resize="none"
            value={value}
          />
        </Label>
      </>
    )
  },
)
