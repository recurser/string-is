import dynamic, { DynamicOptions } from 'next/dynamic'
import { PropsWithChildren } from 'react'

export * from '@components/domain/convert/InputForm'
export * from '@components/domain/convert/LayoutColumn'
export * from '@components/domain/convert/OutputError'
export * from '@components/domain/convert/OutputForm'

// Export this dynamically because it uses the useResponsive() hook
// to decide whether to use mobile or desktop icons. This is
// impossible to determine during SSR.
export const ConverterSelector = dynamic(
  (() =>
    import('./ConverterSelector').then(
      (mod) => mod.ConverterSelector,
    )) as DynamicOptions<PropsWithChildren<Record<string, unknown>>>,
  { ssr: false },
)

// This triggers a warning ('Prop aria-describedby did not match') if
// rendered during SSR.
// @see https://github.com/segmentio/evergreen/issues/842
export const ShareButton = dynamic(
  (() =>
    import('./ShareButton').then((mod) => mod.ShareButton)) as DynamicOptions<
    PropsWithChildren<Record<string, unknown>>
  >,
  { ssr: false },
)

// Export this dynamically because it uses the useResponsive() hook
// to decide whether to use mobile or desktop icons. This is
// impossible to determine during SSR.
export const UseAsInputButton = dynamic(
  (() =>
    import('./UseAsInputButton').then(
      (mod) => mod.UseAsInputButton,
    )) as DynamicOptions<PropsWithChildren<Record<string, unknown>>>,
  { ssr: false },
)
