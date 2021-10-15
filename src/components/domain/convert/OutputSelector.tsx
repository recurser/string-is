import { Button, ChevronRightIcon, Pane, SelectMenu } from 'evergreen-ui'
import { uniqBy } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { createRef, useEffect, useMemo, useState } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { Input } from '@lib/inputs'
import { Output } from '@lib/outputs'

interface Props {
  inputs: Input[]
  triggerMenu: boolean
  setFocusOutput: (focusOutput: boolean) => void
  setOutput: (output: Output | undefined) => void
  setTriggerMenu: (triggerMenu: boolean) => void
}

export const OutputSelector = ({
  inputs,
  triggerMenu,
  setFocusOutput,
  setOutput,
  setTriggerMenu,
}: Props) => {
  const { t } = useTranslation('domain-convert-outputSelector')

  const [selected, setSelected] = useState<string | undefined>()

  // A bit of a hack due to limitations with <SelectMenu />, but we use this
  // to be able to trigger a click and open the menu programatically.
  const buttonRef = createRef<HTMLButtonElement>()

  // We may have duplicate outputs, if more than one input format
  // supports the same output. This makes a unique list.
  const outputs = useMemo(
    () => uniqBy(inputs.map((input) => input.outputs).flat(), 'id'),
    [inputs],
  )

  useEffect(() => {
    if (outputs.length === 0) {
      // If there are no outputs to choose from, clear the menu.
      setSelected(undefined)
    } else if (
      selected &&
      !outputs.map((output) => output.id).includes(selected)
    ) {
      // If we have previously selected an option that is no longer available, select the first available.
      setSelected(outputs[0].id)
    } else if (!triggerMenu && outputs.length === 1) {
      // If there's only one option to choose from, select it.
      setSelected(outputs[0].id)
    } else if (triggerMenu) {
      // If we've been asked to open the menu, select the first option if nothing has been selected.
      setTriggerMenu(false)
      if (!selected) {
        setSelected(outputs[0].id)
      }
      // Trigger opening of the output list after paste or tab, if
      // we have more than one element to choose from.
      buttonRef.current?.click()
    }
  }, [buttonRef, outputs, selected, setSelected, triggerMenu, setTriggerMenu])

  // Set the output based on the selected value. Ideally we could use the
  // output directly in <SelectMenu />, but unfortunately it only supports
  // string and number values.
  useEffect(() => {
    const out = outputs.find((output) => output.id === selected)
    setOutput(out)
  }, [outputs, setOutput, selected])

  return (
    <LayoutColumn>
      <SelectMenu
        closeOnSelect={true}
        hasTitle={false}
        onCloseComplete={() => setFocusOutput(true)}
        onSelect={(item) => setSelected(item.value as string)}
        options={outputs.map((output) => ({
          label: output.id,
          value: output.id,
        }))}
        selected={selected}
      >
        <Pane display="flex">
          <Button
            disabled={outputs.length === 0}
            flex={1}
            iconAfter={selected ? ChevronRightIcon : undefined}
            ref={buttonRef}
            tabIndex={2}
          >
            {selected || t('placeholder')}
          </Button>
        </Pane>
      </SelectMenu>
    </LayoutColumn>
  )
}
