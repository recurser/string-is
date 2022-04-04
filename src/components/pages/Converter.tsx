import { Link, Pane, Text, majorScale } from 'evergreen-ui'
import { ReactElement, useEffect, useMemo, useState } from 'react'
import Trans from 'next-translate/Trans'
import { isEmpty } from 'lodash'
import { styled } from '@compiled/react'
import useTranslation from 'next-translate/useTranslation'

import {
  ConverterSelector,
  InputForm,
  LayoutColumn,
  OutputForm,
  ShareButton,
  UseAsInputButton,
} from '@components/domain/convert'
import { Converter as ConverterType, NullConverter } from '@lib/converters'
import { Card } from '@components/layout'
import { MOBILE } from '@lib/utilities/Constants'
import { MetaTags } from '@components/utility'
import { converters } from '@lib/utilities/Converters'
import { removeTags } from '@lib/utilities/String'
import translations from '@locales/en/pages-converter.json'
import { useConverterContext } from '@contexts/ConverterContext'
import { useShareListener } from '@hooks/useShareListener'

/**
 * An introductory paragraph with responsive margin and padding.
 */
const Intro = styled(Pane)`
  margin-bottom: ${majorScale(3)}px;

  @media only screen and (max-width: ${MOBILE}px) {
    margin-bottom: 0;
    padding: 0 ${majorScale(2)}px;
  }
`

/**
 * Holds the
 */
const Form = styled(Pane)`
  flex-direction: row;

  @media only screen and (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`

const MiddleColumn = styled(Pane)`
  max-width: ${majorScale(20)}px;

  @media only screen and (max-width: 768px) {
    max-width: unset;
  }
`

/**
 * The type of the translation file, which we select random examples from.
 */
interface Translations {
  [key: string]:
    | string
    | {
        [key: string]: string
      }
}

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
  const [focusOutput, setFocusOutput] = useState<boolean>(false)
  const { inputString, setConverter, setForceInput } = useConverterContext()

  // Load the input and options from the URL, if this has been shared-via-URL.
  useShareListener(converter.id, inputString, setForceInput)

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
    let newConverter = converter
    if (converter.id === NullConverter.id) {
      // On the top page, we load a 'random' converter and example.
      newConverter = converters[Math.floor(Math.random() * converters.length)]
    }

    // Choose a random example. Try to choose one that isn't currently being displayed.
    const exampleIds = Object.keys(
      (translations as Translations)[`${newConverter.id}-examples`],
    )
    const numExamples = exampleIds.length
    let example
    while (!example || example === inputString) {
      const exampleId =
        exampleIds[Math.floor(Math.random() * exampleIds.length)]
      example = t(`${newConverter.id}-examples.${exampleId}`)
      // Don't get stuck in a loop if there aren't multiple examples.
      if (numExamples <= 1) {
        break
      }
    }

    setForceInput([example, newConverter])
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

      <Intro alignSelf="center" maxWidth={majorScale(85)} width="100%">
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
      </Intro>

      <Pane display="flex" gap={majorScale(2)}>
        <Card>
          <Form
            display="flex"
            gap={majorScale(3)}
            justifyContent="space-between"
          >
            <InputForm />

            <MiddleColumn
              alignItems="center"
              display="flex"
              flexDirection="column"
              flexGrow={1}
              minWidth={0}
            >
              <LayoutColumn>
                <ConverterSelector setFocusOutput={setFocusOutput} />
                <UseAsInputButton marginTop={majorScale(2)} />
                <ShareButton />
              </LayoutColumn>
            </MiddleColumn>

            <OutputForm
              focusOutput={focusOutput}
              setFocusOutput={setFocusOutput}
            />
          </Form>
        </Card>
      </Pane>
    </>
  )
}

Converter.defaultProps = {
  converter: NullConverter,
}
