import {
  Button,
  ChevronDownIcon,
  ChevronRightIcon,
  Pane,
  SelectMenu,
  SelectMenuItem,
  majorScale,
} from 'evergreen-ui'
import { Dispatch, SetStateAction, useEffect, useMemo } from 'react'
import { isEmpty, minBy } from 'lodash'
import { useBreakpoints } from '@services/Responsive'
import useTranslation from 'next-translate/useTranslation'

import * as converterModule from '@lib/converters'
import {
  recentConverterIds,
  useConverterContext,
} from '@contexts/ConverterContext'
import type { Converter } from '@lib/converters'
import { NullConverter } from '@lib/converters'
import { converterCandidates } from '@services/Converter'

interface Props {
  /**
   * A state-setter that will trigger focus on the output Textarea.
   */
  setFocusOutput: Dispatch<SetStateAction<boolean>>
}

const converters = Object.values(converterModule)

/**
 * Renders a SelectMenu that allows the user to choose which converter
 * to use.
 *
 * @param props - The component props.
 */
export const ConverterSelector = ({ setFocusOutput }: Props) => {
  const { t } = useTranslation('domain-convert-converterSelector')
  const { isMobile } = useBreakpoints()
  const { converter, inputString, setConverter } = useConverterContext()

  useEffect(() => {
    async function selectConverter() {
      if (isEmpty(inputString)) {
        return
      }

      if (converter.isHidden) {
        const candidates = await converterCandidates(inputString)

        if (candidates.length > 0) {
          const recentIds = recentConverterIds()
          const recent =
            // We're looking for the recentIds with the lowest array index (ie the most recent).
            minBy(
              candidates,
              (candidate) =>
                recentIds.includes(candidate.id) &&
                recentIds.indexOf(candidate.id),
            ) || candidates[0]
          setConverter(recent)
        }
      }
    }
    selectConverter()
  }, [converter.isHidden, inputString, setConverter])

  const options = useMemo(() => {
    return converters
      .filter((converter: Converter) => !converter.isHidden)
      .map((converter) => ({
        label: t(`lib-converters-commands:${converter.id}`),
        value: converter.id,
      }))
  }, [t])

  const icon = useMemo(() => {
    if (!converter.isHidden && isMobile) {
      return ChevronDownIcon
    } else if (!converter.isHidden) {
      return ChevronRightIcon
    }
    return undefined
  }, [isMobile, converter])

  /**
   * Updates the state with the selected converter, when the SelectMenu changes.
   *
   * @param item - the chosen SelectMenuItem.
   */
  const onSelect = ({ value }: SelectMenuItem) => {
    const selected =
      converters.find((candidate) => candidate.id === value) || NullConverter
    setConverter(selected)
  }

  return (
    <SelectMenu
      closeOnSelect={true}
      hasTitle={false}
      onCloseComplete={() => setFocusOutput(true)}
      onSelect={onSelect}
      options={options}
      selected={converter.id}
    >
      <Pane display="flex">
        <Button
          flex={1}
          iconAfter={icon}
          maxWidth={majorScale(20)}
          tabIndex={2}
        >
          {converter.isHidden
            ? t('placeholder')
            : t(`lib-converters-commands:${converter.id}`)}
        </Button>
      </Pane>
    </SelectMenu>
  )
}
