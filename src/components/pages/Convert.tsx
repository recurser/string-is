import { majorScale, Pane } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Form, OutputSelector, Result } from '@components/domain/convert'
import { Card } from '@components/layout/Card'
import { useInputContext } from '@contexts/InputContext'
import { DefaultInput, selectInputs } from '@services/Converter'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')
  const [inputs, setInputs] = useState([DefaultInput])

  const { inputString } = useInputContext()

  useEffect(() => {
    // See https://stackoverflow.com/a/66071205
    let active = true
    select()
    return () => {
      active = false
    }

    async function select() {
      if (!active) {
        return
      }
      const selected = await selectInputs(inputString)
      setInputs(selected)
    }
  }, [inputString])

  return (
    <Pane display="flex" gap={majorScale(2)}>
      <Head>
        <title>{t('page_title')}</title>
      </Head>

      <Card>
        <Pane display="flex" flexDirection="row" gap={majorScale(3)}>
          <Pane flex={2} flexDirection="column">
            <Form />
          </Pane>

          <Pane flex={1} flexDirection="column">
            <OutputSelector inputs={inputs} />
          </Pane>

          <Pane flex={2} flexDirection="column">
            <Result output={inputs[0].outputs[0]} />
          </Pane>
        </Pane>
      </Card>
    </Pane>
  )
}
