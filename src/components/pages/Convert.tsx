import { majorScale, Pane } from 'evergreen-ui'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

import {
  InputForm,
  OutputForm,
  ConverterSelector,
} from '@components/domain/convert'
import { Card } from '@components/layout/Card'
import { useInputContext } from '@contexts/InputContext'
import { Converter, NullConverter } from '@lib/converters'
import { selectConverters } from '@services/Converter'
import { useBreakpoints } from '@services/Responsive'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')
  const { isMobile } = useBreakpoints()
  const [converters, setConverters] = useState<Converter[]>([])
  const [converter, setConverter] = useState<Converter>(NullConverter)
  const [triggerMenu, setTriggerMenu] = useState<boolean>(false)
  const [focusOutput, setFocusOutput] = useState<boolean>(false)

  const { inputString } = useInputContext()

  useEffect(() => {
    // See https://stackoverflow.com/a/66071205
    let active = true
    select()
    return () => {
      active = false
    }

    // Select relevant converters when the input string changes.
    async function select() {
      if (!active) {
        return
      }
      setConverters(await selectConverters(inputString))
    }
  }, [inputString])

  const disabled = useMemo(() => isEmpty(inputString), [inputString])

  return (
    <Pane display="flex" gap={majorScale(2)}>
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card>
        <Pane
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          gap={majorScale(3)}
        >
          <Pane display="flex" flex={2} flexDirection="column">
            <InputForm setTriggerMenu={setTriggerMenu} />
          </Pane>

          <Pane
            display="flex"
            flex={1}
            flexDirection="column"
            maxWidth={majorScale(20)}
          >
            <ConverterSelector
              converters={converters}
              disabled={disabled}
              setConverter={setConverter}
              setFocusOutput={setFocusOutput}
              setTriggerMenu={setTriggerMenu}
              triggerMenu={triggerMenu}
            />
          </Pane>

          <Pane display="flex" flex={2} flexDirection="column">
            <OutputForm
              converter={converter || NullConverter}
              disabled={disabled || converter.id === NullConverter.id}
              focusOutput={focusOutput}
              setFocusOutput={setFocusOutput}
            />
          </Pane>
        </Pane>
      </Card>
    </Pane>
  )
}
