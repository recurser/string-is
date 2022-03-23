import { Link, Pane, Text, majorScale } from 'evergreen-ui'
import { ReactElement, useEffect, useMemo, useState } from 'react'
import Trans from 'next-translate/Trans'
import { isEmpty } from 'lodash'

import {
  ConverterSelector,
  InputForm,
  LayoutColumn,
  OutputForm,
  UseAsInputButton,
} from '@components/domain/convert'
import { Converter as ConverterType, NullConverter } from '@lib/converters'
import { Card } from '@components/layout'
import { MetaTags } from '@components/utility'
import { converters } from '@lib/utilities/Converters'
import { removeTags } from '@lib/utilities/String'
import { useBreakpoints } from '@services/Responsive'
import { useConverterContext } from '@contexts/ConverterContext'
import useTranslation from 'next-translate/useTranslation'

interface Props {
  /**
   * The specific converter to load initially.
   */
  converter: ConverterType
}

/**
 * Renders the standard application layout, used by almost all
 * pages. This includes various contexts for analytics, conversion
 * options etc.
 *
 * @param props - the component props.
 */
export const Converter = ({ converter }: Props): ReactElement => {
  const { t } = useTranslation('pages-converter')
  const { isMobile } = useBreakpoints()
  const [focusOutput, setFocusOutput] = useState<boolean>(false)
  const { inputString, setConverter, setForceInput } = useConverterContext()

  const numConverters = useMemo(() => converters.length, [])

  const isRootPage = useMemo(
    () => converter.id === NullConverter.id,
    [converter.id],
  )

  // Load the specific converter for this page.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setConverter(converter), [])

  // When we return to the root page (ie maybe the header icon was
  // clicked), clear the input and load the NullConverter.
  useEffect(() => {
    if (isRootPage && !isEmpty(inputString)) {
      setForceInput(['', NullConverter])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRootPage])

  // Load the example data as input, with the specified converter.
  const onLoadExample = () => {
    if (converter.id === NullConverter.id) {
      // On the top page, we load a 'random' converter and example.
      const randomConverter =
        converters[Math.floor(Math.random() * converters.length)]
      setForceInput([t(`${randomConverter.id}-example`), randomConverter])
    } else {
      setForceInput([t(`${converter.id}-example`), converter])
    }
  }

  return (
    <>
      <MetaTags
        description={removeTags(
          t(`pages-converter:${converter.id}-intro`, { numConverters }),
        )}
        title={
          isRootPage
            ? undefined
            : `${t(`pages-converter:${converter.id}-heading`)} - string.is`
        }
      />

      <Pane
        alignSelf="center"
        marginBottom={isMobile ? 0 : majorScale(3)}
        maxWidth={majorScale(85)}
        paddingX={isMobile ? majorScale(2) : 0}
        width="100%"
      >
        <Text color="muted">
          <Trans
            components={[
              <Link
                cursor="pointer"
                key="li_goal_strict_csp_1"
                onClick={onLoadExample}
              />,
            ]}
            i18nKey={`pages-converter:${converter.id}-intro`}
            values={{ numConverters }}
          />
        </Text>
      </Pane>

      <Pane display="flex" gap={majorScale(2)}>
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
    </>
  )
}

Converter.defaultProps = {
  converter: NullConverter,
}
