import { Link, Pane, Text, majorScale } from 'evergreen-ui'
import { ReactElement, useEffect } from 'react'
import Trans from 'next-translate/Trans'

import type { Converter as ConverterType } from '@lib/converters'
import { Home } from '@pages/Home'
import { MetaTags } from '@components/layout'
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
  const { setConverter, setForceInput } = useConverterContext()

  // Load the specific converter for this page.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setConverter(converter), [])

  // Load the example data as input, with the specified converter.
  const example = t(`${converter.id}-example`)
  const onLoadExample = () => setForceInput([example, converter])

  return (
    <>
      <MetaTags
        description={removeTags(t(`pages-converter:${converter.id}-intro`))}
        title={`${t(`pages-converter:${converter.id}-heading`)} - string.is`}
      />

      <Pane
        alignSelf="center"
        marginBottom={isMobile ? 0 : majorScale(3)}
        maxWidth={majorScale(85)}
        paddingX={isMobile ? majorScale(2) : 0}
        width="100%"
      >
        <Text>
          <Trans
            components={[
              <Link
                cursor="pointer"
                key="li_goal_strict_csp_1"
                onClick={onLoadExample}
              />,
            ]}
            i18nKey={`pages-converter:${converter.id}-intro`}
          />
        </Text>
      </Pane>

      <Home isRootPage={false} />
    </>
  )
}
