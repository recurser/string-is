import {
  Button,
  ChevronLeftIcon,
  ChevronUpIcon,
  Pane,
  majorScale,
} from 'evergreen-ui'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import { useBreakpoints } from '@services/Responsive'
import { useConverterContext } from '@contexts/ConverterContext'

export const UseAsInputButton = () => {
  const { t } = useTranslation('domain-convert-useAsInputButton')
  const { isMobile } = useBreakpoints()
  const [disabled, setDisabled] = useState(true)
  const { outputString, setUseOutput } = useConverterContext()

  useEffect(() => {
    const noValue = isEmpty(outputString.trim())
    if (noValue !== disabled) {
      setDisabled(noValue)
    }
  }, [disabled, outputString, setDisabled])

  const onClick = () => setUseOutput(true)

  return (
    <Pane display="flex" flexDirection="row" marginTop={majorScale(1)}>
      <Button
        disabled={disabled}
        flex={1}
        iconBefore={isMobile ? ChevronUpIcon : ChevronLeftIcon}
        maxWidth={majorScale(20)}
        onClick={onClick}
      >
        {t('button_label')}
      </Button>
    </Pane>
  )
}
