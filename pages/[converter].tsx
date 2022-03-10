import { GetServerSideProps } from 'next'
import Trans from 'next-translate/Trans'
import { camelCase } from 'lodash'

import * as converterModule from '@lib/converters'
import { Application } from '@components/layout'
import { Converter as SubConverter } from '@pages/Converter'

const converters = Object.values(converterModule)

interface Props {
  /**
   * The ID of the converter, validated on the server side
   * in getServerSideProps().
   */
  converterId: string
}

/**
 * A page specific to the converter with the given ID.
 *
 * @param props - the component props.
 */
// eslint-disable-next-line import/no-default-export
export default function Converter({ converterId }: Props) {
  const converter = converters.find((cnv) => cnv.id === converterId)

  // This will never happen, but we do it to keep Typescript happy.
  if (!converter) {
    return <></>
  }

  return (
    <Application
      maxWidth={1600}
      pageHeading={<Trans i18nKey={`pages-converter:${converterId}-heading`} />}
    >
      <SubConverter converter={converter} />
    </Application>
  )
}

/**
 * Triggers a 404 error if the requested converter can't be found.
 *
 * @param context - The request context.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Hyphenated 'JavaScript' is more readable as 'javascript' in URLs, but camelCase()
  // expected the hyphen.
  const hyphenated = `${context.params?.converter}`.replace(
    'javascript',
    'java-script',
  )
  const converterId = camelCase(hyphenated)
  const converter = converters.find((cnv) => cnv.id === converterId)

  if (!converter) {
    return {
      notFound: true,
    }
  }

  return {
    props: { converterId: converter.id },
  }
}
