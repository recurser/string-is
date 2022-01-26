import { ChangeEvent, forwardRef, useEffect } from 'react'
import {
  IconButton,
  RefreshIcon,
  Select,
  TextInput,
  Tooltip,
  majorScale,
} from 'evergreen-ui'
import { validate as uuidValidate, version as uuidVersion, v4 } from 'uuid'
import { isEmpty } from 'lodash'
import useTranslation from 'next-translate/useTranslation'

import { CodeTextarea, Form, Label } from '@components/forms'
import { OutputProps } from '@lib/types'
import { useConverterContext } from '@contexts/ConverterContext'
import { useConverterOptionsContext } from '@contexts/ConverterOptionsContext'

// These UUID versions require a namespace string.
const NamespacedVersions = ['v3', 'v5']

export const UuidOutput = forwardRef<HTMLTextAreaElement, OutputProps>(
  ({ converter, disabled, input, output, ...props }: OutputProps, ref) => {
    const { t } = useTranslation('domain-convert-outputs-uuidOutput')
    const { inputString, setInputString } = useConverterContext()
    const { options, setOptions } = useConverterOptionsContext(
      converter.outputId,
    )

    const onRotateNamespace = () => {
      if (inputString !== 'uuid') {
        // Make sure a new UUID will be generated, if an explicit one was input.
        setInputString('uuid')
      }
      setOptions({ ...options, namespace: v4() })
    }

    const onChangeVersion = (event: ChangeEvent<HTMLSelectElement>) => {
      if (inputString !== 'uuid') {
        // Make sure a new UUID will be generated, if an explicit one was input.
        setInputString('uuid')
      }
      setOptions({ ...options, version: event.target.value })
    }

    // If we were given a UUID as input, select the correct version for it.
    useEffect(() => {
      if (uuidValidate(input)) {
        const actualVersion = `v${uuidVersion(input)}`
        if (actualVersion !== options.version) {
          setOptions({ ...options, version: actualVersion })
        }
      }
    }, [input, options, setOptions])

    // If this generator was selected without providing input, add some default input
    // so that the converter is not disabled initially.
    useEffect(() => {
      if (isEmpty(inputString)) {
        setInputString('uuid')
      }
    }, [inputString, setInputString])

    return (
      <Form>
        {NamespacedVersions.includes(options.version as string) && (
          <Label
            disabled={disabled}
            htmlFor="namespaceInput"
            label={t('label_namespace')}
          >
            <TextInput
              disabled={disabled}
              id="namespaceInput"
              maxWidth={majorScale(20)}
              readOnly={true}
              value={options.namespace as string}
            />

            <Tooltip content={t('namespace_tooltip')}>
              <IconButton
                disabled={disabled}
                icon={RefreshIcon}
                marginLeft={majorScale(1)}
                onClick={onRotateNamespace}
              />
            </Tooltip>
          </Label>
        )}

        <Label
          disabled={disabled}
          htmlFor="versionInput"
          label={t('version_label')}
        >
          <Select
            disabled={disabled}
            id="versionInput"
            maxWidth={majorScale(25)}
            onChange={onChangeVersion}
            value={options.version as string}
          >
            <option value="v1">{t('v1_option')}</option>
            <option value="v3">{t('v3_option')}</option>
            <option value="v4">{t('v4_option')}</option>
            <option value="v5">{t('v5_option')}</option>
          </Select>
        </Label>

        <CodeTextarea {...props} disabled={disabled} ref={ref} value={output} />
      </Form>
    )
  },
)
