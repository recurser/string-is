import { majorScale } from 'evergreen-ui'
import useTranslation from 'next-translate/useTranslation'
import { forwardRef, useMemo } from 'react'

import { CodeTextarea, Form, Label } from '@components/forms'
import { input as jwtInput } from '@lib/inputs/JwtInput'
import { header } from '@lib/outputs/JwtOutput'
import { OutputProps } from '@lib/types'

// Used to calculate heights for the textareas to display all of the content.
const TextAreaLineHeight = 20

export const JwtOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ disabled, input, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-jwtOutput')

    const jwt = useMemo(() => jwtInput(input), [input])

    const headerStr = useMemo(() => (jwt ? header(jwt) : ''), [jwt])

    const headerStrHeight = Math.max(
      headerStr.split('\n').length * TextAreaLineHeight,
      majorScale(10),
    )

    const payloadHeight = Math.max(
      output.split('\n').length * TextAreaLineHeight,
      majorScale(20),
    )

    return (
      <Form>
        <Label
          alignItems="start"
          disabled={disabled}
          flexDirection="column"
          htmlFor="headerInput"
          label={t('label_header')}
        >
          <CodeTextarea
            disabled={disabled}
            id="headerInput"
            minHeight={headerStrHeight}
            readOnly={true}
            value={headerStr}
          />
        </Label>

        <Label
          alignItems="start"
          disabled={disabled}
          flexDirection="column"
          htmlFor="payloadInput"
          label={t('label_payload')}
        >
          <CodeTextarea
            {...props}
            disabled={disabled}
            id="payloadInput"
            minHeight={payloadHeight}
            ref={ref}
            value={output}
          />
        </Label>
      </Form>
    )
  },
)
