import { Button, ChevronRightIcon, Pane, SelectMenu } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { createRef, useEffect, useState } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { Converter } from '@lib/converters'

interface Props {
  converters: Converter[]
  disabled?: boolean
  triggerMenu: boolean
  setFocusOutput: (focusOutput: boolean) => void
  setConverter: (converter: Converter | undefined) => void
  setTriggerMenu: (triggerMenu: boolean) => void
}

export const ConverterSelector = ({
  converters,
  disabled,
  triggerMenu,
  setFocusOutput,
  setConverter,
  setTriggerMenu,
}: Props) => {
  const { t } = useTranslation('domain-convert-converterSelector')

  const [selected, setSelected] = useState<string | undefined>()

  // A bit of a hack due to limitations with <SelectMenu />, but we use this
  // to be able to trigger a click and open the menu programatically.
  const buttonRef = createRef<HTMLButtonElement>()

  useEffect(() => {
    if (disabled) {
      setSelected(undefined)
    } else if (
      selected &&
      !converters.map((converter) => converter.id).includes(selected)
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
        setSelected(converters[0].id)
      }
      // Trigger opening of the converter list after paste or tab, if
      // we have more than one element to choose from.
      buttonRef.current?.click()
    }
  }, [
    buttonRef,
    converters,
    disabled,
    selected,
    setSelected,
    triggerMenu,
    setTriggerMenu,
  ])

  // Set the converter based on the selected value. Ideally we could use the
  // converter directly in <SelectMenu />, but unfortunately it only supports
  // string and number values.
  useEffect(() => {
    const cnvt = converters.find((converter) => converter.id === selected)
    setConverter(cnvt)
  }, [converters, setConverter, selected])

  return (
    <LayoutColumn>
      <SelectMenu
        closeOnSelect={true}
        hasTitle={false}
        onCloseComplete={() => setFocusOutput(true)}
        onSelect={(item) => setSelected(item.value as string)}
        options={converters.map((converter) => ({
          label: t(`lib-converters-commands:${converter.id}`),
          value: converter.id,
        }))}
        selected={selected}
      >
        <Pane display="flex">
          <Button
            disabled={disabled}
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
