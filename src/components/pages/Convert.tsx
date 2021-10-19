import { majorScale, Pane } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import {
  InputForm,
  OutputForm,
  OutputSelector,
} from '@components/domain/convert'
import { Card } from '@components/layout/Card'
import { useInputContext } from '@contexts/InputContext'
import { Output } from '@lib/outputs'
import { selectOutputs } from '@services/Converter'
import { useBreakpoints } from '@services/Responsive'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')
  const { isMobile } = useBreakpoints()
  const [outputs, setOutputs] = useState<Output[]>([])
  const [output, setOutput] = useState<Output | undefined>()
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

    // Select relevant outputs when the input string changes.
    async function select() {
      if (!active) {
        return
      }
      setOutputs(await selectOutputs(inputString))
    }
  }, [inputString])

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

          <Pane display="flex" flex={1} flexDirection="column">
            <OutputSelector
              outputs={outputs}
              setFocusOutput={setFocusOutput}
              setOutput={setOutput}
              setTriggerMenu={setTriggerMenu}
              triggerMenu={triggerMenu}
            />
          </Pane>

          <Pane display="flex" flex={2} flexDirection="column">
            <OutputForm
              focusOutput={focusOutput}
              output={output}
              setFocusOutput={setFocusOutput}
            />
          </Pane>
        </Pane>
      </Card>
    </Pane>
  )
}
