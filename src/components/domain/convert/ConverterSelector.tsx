import {
  Button,
  ChevronRightIcon,
  Pane,
  SelectMenu,
  SelectMenuItem,
} from 'evergreen-ui'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { isEmpty, minBy } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import * as converterModule from '@lib/converters'
import {
  recentConverterIds,
  useConverterContext,
} from '@contexts/ConverterContext'
import { NullConverter } from '@lib/converters'
import { converterCandidates } from '@services/Converter'

interface Props {
  setFocusOutput: Dispatch<SetStateAction<boolean>>
}

const converters = Object.values(converterModule)

export const ConverterSelector = ({ setFocusOutput }: Props) => {
  const { t } = useTranslation('domain-convert-converterSelector')
  const {
    clearConverter,
    converter,
    inputString,
    setClearConverter,
    setConverter,
  } = useConverterContext()
  const [selected, setSelected] = useState<string | undefined>()

  useEffect(() => {
    async function fetchData() {
      if (isEmpty(inputString)) {
        return
      }

      if (!selected) {
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
          setSelected(recent.id)
        }
      }
    }
    fetchData()
  }, [inputString, selected, setSelected])

  // Set the converter based on the selected value. Ideally we could use the
  // converter directly in <SelectMenu />, but unfortunately it only supports
  // string and number values.
  useEffect(() => {
    const cnvt =
      converters.find((candidate) => candidate.id === selected) || NullConverter
    if (converter.id !== cnvt.id) {
      setConverter(cnvt || NullConverter)
    }
  }, [converter.id, setConverter, selected])

  const options = useMemo(() => {
    return converters
      .filter((converter) => converter.id != NullConverter.id)
      .map((converter) => ({
        label: t(`lib-converters-commands:${converter.id}`),
        value: converter.id,
      }))
  }, [t])

  // If 'clearConverter' is true, clear the selected converter and set 'clearConverter'
  // back to false. This can be triggered by eg. clicking 'Use as input'.
  useEffect(() => {
    if (clearConverter) {
      setClearConverter(false)
      setSelected(undefined)
    }
  }, [clearConverter, setClearConverter, setSelected])

  const onSelect = ({ value }: SelectMenuItem) => {
    setSelected(value as string)
  }

  return (
    <SelectMenu
      closeOnSelect={true}
      hasTitle={false}
      onCloseComplete={() => setFocusOutput(true)}
      onSelect={onSelect}
      options={options}
      selected={selected}
    >
      <Pane display="flex">
        <Button
          flex={1}
          iconAfter={selected ? ChevronRightIcon : undefined}
          tabIndex={2}
        >
          {selected
            ? t(`lib-converters-commands:${selected}`)
            : t('placeholder')}
        </Button>
      </Pane>
    </SelectMenu>
  )
}
