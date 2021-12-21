import {
  Button,
  ChevronRightIcon,
  Pane,
  SelectMenu,
  SelectMenuItem,
} from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { createRef, useEffect, useState } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useInputContext } from '@contexts/InputContext'
import { Converter, NullConverter } from '@lib/converters'
import * as converterModule from '@lib/converters'
import { selectConverter } from '@services/Converter'

interface Props {
  triggerMenu: boolean
  setFocusOutput: (focusOutput: boolean) => void
  setConverter: (converter: Converter) => void
  setTriggerMenu: (triggerMenu: boolean) => void
}

const converters = Object.values(converterModule)

export const ConverterSelector = ({
  triggerMenu,
  setFocusOutput,
  setConverter,
  setTriggerMenu,
}: Props) => {
  const { t } = useTranslation('domain-convert-converterSelector')
  const { inputString } = useInputContext()
  const [selected, setSelected] = useState<string | undefined>()

  // A bit of a hack due to limitations with <SelectMenu />, but we use this
  // to be able to trigger a click and open the menu programatically.
  const buttonRef = createRef<HTMLButtonElement>()

  useEffect(() => {
    async function fetchData() {
      if (
        selected &&
        !converters
          .map((converter) => converter.id as string)
          .includes(selected)
      ) {
        // If we have previously selected an option that is no longer available, clear the menu.
        setSelected(undefined)
      } else if (!triggerMenu && converters.length === 1) {
        // If there's only one option to choose from, select it.
        setSelected(converters[0].id)
      } else if (triggerMenu) {
        // If we've been asked to open the menu, select the first option if nothing has been selected.
        setTriggerMenu(false)
        if (!selected) {
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
          console.log(inputString)
          const winner = await selectConverter(inputString)
          console.log(winner)
          if (winner) {
            setSelected(winner.id)
          }
        }
      }
    }
    fetchData()
  }, [
    buttonRef,
    inputString,
    selected,
    setSelected,
    triggerMenu,
    setTriggerMenu,
  ])

  const onSelect = ({ value }: SelectMenuItem) => {
    setSelected(value as string)
  }

  // Set the converter based on the selected value. Ideally we could use the
  // converter directly in <SelectMenu />, but unfortunately it only supports
  // string and number values.
  useEffect(() => {
    const cnvt = converters.find((converter) => converter.id === selected)
    setConverter(cnvt || NullConverter)
  }, [setConverter, selected])

  return (
    <LayoutColumn>
      <SelectMenu
        closeOnSelect={true}
        hasTitle={false}
        onCloseComplete={() => setFocusOutput(true)}
        onSelect={onSelect}
        options={converters.map((converter) => ({
          label: t(`lib-converters-commands:${converter.id}`),
          value: converter.id,
        }))}
        selected={selected}
      >
        <Pane display="flex">
          <Button
            flex={1}
            iconAfter={selected ? ChevronRightIcon : undefined}
            ref={buttonRef}
            tabIndex={2}
          >
            {selected
              ? t(`lib-converters-commands:${selected}`)
              : t('placeholder')}
          </Button>
        </Pane>
      </SelectMenu>
    </LayoutColumn>
  )
}
