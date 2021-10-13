import { Button, ChevronRightIcon, SelectMenu } from 'evergreen-ui'
import { uniqBy } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useMemo, useState } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { Input } from '@lib/inputs'
import { Output } from '@lib/outputs'

interface Props {
  inputs: Input[]
  pasted: boolean
  setOutput: (output: Output | undefined) => void
  setPasted: (pasted: boolean) => void
}

export const OutputSelector = ({
  inputs,
  pasted,
  setOutput,
  setPasted,
}: Props) => {
  const { t } = useTranslation('domain-convert-outputSelector')

  const [selected, setSelected] = useState<string | undefined>()

  const outputs = useMemo(
    () => uniqBy(inputs.map((input) => input.outputs).flat(), 'id'),
    [inputs],
  )

  useEffect(() => {
    if (outputs.length === 0) {
      setSelected(undefined)
    } else if (outputs.length === 1) {
      setSelected(outputs[0].id)
    } else if (pasted) {
      setPasted(false)
      setSelected(undefined)
    }
  }, [outputs, pasted, setPasted])

  useEffect(() => {
    const out = outputs.find((output) => output.id === selected)
    setOutput(out)
  }, [outputs, setOutput, selected])

  return (
    <LayoutColumn>
      <SelectMenu
        closeOnSelect={true}
        hasTitle={false}
        onSelect={(item) => setSelected(item.value as string)}
        options={outputs.map((output) => ({
          label: output.id,
          value: output.id,
        }))}
        selected={selected}
      >
        <Button
          disabled={outputs.length === 0}
          iconAfter={selected ? ChevronRightIcon : undefined}
        >
          {selected || t('placeholder')}
        </Button>
      </SelectMenu>
    </LayoutColumn>
  )
}
