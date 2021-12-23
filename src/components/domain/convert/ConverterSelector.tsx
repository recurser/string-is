import {
  Button,
  ChevronRightIcon,
  Pane,
  SelectMenu,
  SelectMenuItem,
} from 'evergreen-ui'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import {
  createRef,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { LayoutColumn } from '@components/domain/convert/LayoutColumn'
import { useInputContext } from '@contexts/InputContext'
import { Converter, NullConverter } from '@lib/converters'
import * as converterModule from '@lib/converters'
import { selectConverter } from '@services/Converter'

interface Props {
  setFocusOutput: Dispatch<SetStateAction<boolean>>
  setConverter: Dispatch<SetStateAction<Converter>>
}

const converters = Object.values(converterModule)

export const ConverterSelector = ({ setFocusOutput, setConverter }: Props) => {
  const { t } = useTranslation('domain-convert-converterSelector')
  const { inputString } = useInputContext()
  const [selected, setSelected] = useState<string | undefined>()

  // A bit of a hack due to limitations with <SelectMenu />, but we use this
  // to be able to trigger a click and open the menu programatically.
  const buttonRef = createRef<HTMLButtonElement>()

  useEffect(() => {
    async function fetchData() {
      if (isEmpty(inputString)) {
        return
      }

      if (!selected) {
        const winner = await selectConverter(inputString)
        if (winner) {
          setSelected(winner.id)
        }
      }
    }
    fetchData()
  }, [buttonRef, inputString, selected, setSelected])

  // Set the converter based on the selected value. Ideally we could use the
  // converter directly in <SelectMenu />, but unfortunately it only supports
  // string and number values.
  useEffect(() => {
    const cnvt = converters.find((converter) => converter.id === selected)
    setConverter(cnvt || NullConverter)
  }, [setConverter, selected])

  const options = useMemo(() => {
    return converters
      .filter((converter) => converter.id != NullConverter.id)
      .map((converter) => ({
        label: t(`lib-converters-commands:${converter.id}`),
        value: converter.id,
      }))
  }, [t])

  const onSelect = ({ value }: SelectMenuItem) => {
    setSelected(value as string)
  }

  return (
    <LayoutColumn>
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
