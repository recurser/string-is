import {
  Button,
  majorScale,
  Pane,
  SelectMenu,
  SelectMenuItem,
  Textarea,
  TextareaProps,
  TextInput,
} from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { ChangeEvent, forwardRef } from 'react'

import { Label } from '@components/forms'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { id as outputId } from '@lib/outputs/DatetimeOutput'
import { timezones } from '@lib/utilities/Timezones'

export const DatetimeOutput = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-datetimeOutput')
    const { options, setOptions } = useConverterOptionsContext(outputId)

    const onSelectTimezone = (selected: SelectMenuItem) => {
      setOptions({ ...options, timezone: selected.value })
    }

    const onChangeFormat = (event: ChangeEvent<HTMLInputElement>) => {
      setOptions({ ...options, format: event.target.value })
    }

    return (
      <>
        <Pane
          alignItems="baseline"
          display="flex"
          flexDirection="row"
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
                <Button width={majorScale(24)}>{options.timezone}</Button>
              </SelectMenu>
            </Label>

            <Label label={t('label_format')}>
              <TextInput
                onChange={onChangeFormat}
                placeholder="YYYY-MM-DD HH:mm:ss"
                value={options.format as string}
                width={majorScale(24)}
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
          />
        </Label>
      </>
    )
  },
)
