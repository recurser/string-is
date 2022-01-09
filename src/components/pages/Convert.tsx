import { majorScale, Pane } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useState } from 'react'

import {
  InputForm,
  OutputForm,
  ConverterSelector,
} from '@components/domain/convert'
import { Card } from '@components/layout/Card'
import { Converter, NullConverter } from '@lib/converters'
import { useBreakpoints } from '@services/Responsive'

export const Convert = () => {
  const { t } = useTranslation('pages-convert')
  const { isMobile } = useBreakpoints()
  const [converter, setConverter] = useState<Converter>(NullConverter)
  const [focusOutput, setFocusOutput] = useState<boolean>(false)

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
          justifyContent="space-between"
        >
          <InputForm />

          <Pane
            display="flex"
            flexDirection="column"
            flexGrow={1}
            maxWidth={majorScale(20)}
            minWidth={0}
          >
            <ConverterSelector
              converter={converter}
              setConverter={setConverter}
              setFocusOutput={setFocusOutput}
            />
          </Pane>

          <OutputForm
            converter={converter || NullConverter}
            focusOutput={focusOutput}
            setFocusOutput={setFocusOutput}
          />
        </Pane>
      </Card>
    </Pane>
  )
}
