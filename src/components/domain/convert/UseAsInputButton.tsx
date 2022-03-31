import {
  Button,
  ButtonProps,
  ChevronLeftIcon,
  ChevronUpIcon,
  Pane,
  majorScale,
} from 'evergreen-ui'
import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import { NullConverter } from '@lib/converters'
import { useConverterContext } from '@contexts/ConverterContext'
import { useResponsive } from '@hooks/useResponsive'

/**
 * Renders a button to move the content of the output textarea into
 * the input textarea. This is convenient for chaining operations,
 * and feeding the result of one operation into another.
 */
export const UseAsInputButton = (props: ButtonProps) => {
  const { t } = useTranslation('domain-convert-useAsInputButton')
  const { isMobile } = useResponsive()
  const [disabled, setDisabled] = useState(true)
  const { outputString, setForceInput } = useConverterContext()

  useEffect(() => {
    const noValue = isEmpty(outputString.trim())
    if (noValue !== disabled) {
      setDisabled(noValue)
    }
  }, [disabled, outputString, setDisabled])

  const onClick = () => setForceInput([outputString, NullConverter])

  return (
    <Pane display="flex" flexDirection="row" marginTop={majorScale(1)}>
      <Button
        disabled={disabled}
        flex={1}
        iconBefore={isMobile ? ChevronUpIcon : ChevronLeftIcon}
        maxWidth={majorScale(20)}
        onClick={onClick}
        {...props}
      >
        {t('button_label')}
      </Button>
    </Pane>
  )
}
