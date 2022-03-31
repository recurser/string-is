import { GetServerSideProps } from 'next'
import Trans from 'next-translate/Trans'
import { isEmpty } from 'lodash'

import { Application } from '@components/layout'
import { ConverterContext } from '@contexts/ConverterContext'
import { ConverterOptionsContext } from '@contexts/ConverterOptionsContext'
import { NullConverter } from '@lib/converters'
import { Converter as SubConverter } from '@pages/Converter'
import { camelCaseConverterSlug } from '@lib/utilities/String'
import { converters } from '@lib/utilities/Converters'

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
      <ConverterContext>
        <ConverterOptionsContext>
          <SubConverter converter={converter} />
        </ConverterOptionsContext>
      </ConverterContext>
    </Application>
  )
}

/**
 * Triggers a 404 error if the requested converter can't be found.
 *
 * @param context - The request context.
 */
export const getServerSideProps: GetServerSideProps = async (context) => {
  // If we have no parameters passed, we're on the root page with no converter selected.
  if (isEmpty(context.params)) {
    return {
      props: { converterId: NullConverter.id },
    }
  }

  const converterId = camelCaseConverterSlug(`${context.params?.converter}`)
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
