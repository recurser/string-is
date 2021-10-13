import { Combobox } from 'evergreen-ui'
import { uniqBy } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import { useEffect, useMemo } from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { Input } from '@lib/inputs'
import { Output } from '@lib/outputs'

interface Props {
  inputs: Input[]
  pasted: boolean
  setOutput: (output: Output) => void
  setPasted: (pasted: boolean) => void
}

export const OutputSelector = ({
  inputs,
  pasted,
  setOutput,
  setPasted,
}: Props) => {
  const { t } = useTranslation('domain-convert-outputSelector')

  useEffect(() => {
    if (pasted) {
      console.log('pasted!')
      setPasted(false)
    }
  }, [pasted, setPasted])

  const outputs = useMemo(
    () => uniqBy(inputs.map((input) => input.outputs).flat(), 'id'),
    [inputs],
  )

  return (
    <LayoutColumn>
      <Combobox
        itemToString={(item) => (item ? item.id : '')}
        items={outputs}
        onChange={(selected) => setOutput(selected)}
        openOnFocus={true}
        placeholder={t('placeholder')}
      />
    </LayoutColumn>
  )
}
