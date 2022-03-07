import { Pane, majorScale } from 'evergreen-ui'
import { useState } from 'react'

import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

/**
 * Renders the 'convert' page, which is basically the heart of the
 * application. It provides an input textarea, a conversion selector,
 * and an output component which depends on the type of conversion.
 *
 * @param props - the component props.
 */
import {
  ConverterSelector,
  InputForm,
  LayoutColumn,
  OutputForm,
  UseAsInputButton,
} from '@components/domain/convert'
import { Card } from '@components/layout/Card'
import { useBreakpoints } from '@services/Responsive'

export const Home = () => {
  const { t } = useTranslation('pages-home')
  const { isMobile } = useBreakpoints()
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
            alignItems="center"
            display="flex"
            flexDirection="column"
            flexGrow={1}
            maxWidth={isMobile ? undefined : majorScale(20)}
            minWidth={0}
          >
            <LayoutColumn>
              <ConverterSelector setFocusOutput={setFocusOutput} />
              <UseAsInputButton />
            </LayoutColumn>
          </Pane>

          <OutputForm
            focusOutput={focusOutput}
            setFocusOutput={setFocusOutput}
          />
        </Pane>
      </Card>
    </Pane>
  )
}
