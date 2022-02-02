// Based on the excellent next-plausible by @4lejandrito
//
// Extracted to keep 3rd-party dependencies to a minimum, since it's fairly simple.
//
// @see https://github.com/4lejandrito/next-plausible/blob/83ca6ae0c13dc2f5e1f438ffbc744993437432bd/index.tsx

import React, { ReactNode } from 'react'
import Head from 'next/head'

const allModifiers = [
  'exclusions',
  'local',
  'manual',
  'outbound-links',
] as const
type ScriptModifier = typeof allModifiers[number]

const getScriptPath = (...modifiers: (ScriptModifier | null)[]) => {
  return `${plausibleDomain}/js/${[
    'script',
    ...modifiers.sort().filter((modifier) => modifier !== null),
  ].join('.')}.js`
}

const plausibleDomain = 'https://plausible.io'

export const PlausibleProvider = (props: {
  children: ReactNode | ReactNode[]
  domain: string
  trackLocalhost?: boolean
  trackOutboundLinks?: boolean
  exclude?: string
  enabled?: boolean
  integrity?: string
  scriptProps?: React.DetailedHTMLProps<
    React.ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  >
}) => {
  const { enabled = process.env.NODE_ENV === 'production' } = props

  return (
    <>
      <Head>
        {enabled && (
          <script
            async={true}
            crossOrigin={props.integrity ? 'anonymous' : undefined}
            data-domain={props.domain}
            data-exclude={props.exclude}
            defer={true}
            integrity={props.integrity}
            src={getScriptPath(
              props.trackLocalhost ? 'local' : null,
              props.trackOutboundLinks ? 'outbound-links' : null,
              props.exclude ? 'exclusions' : null,
            )}
            {...props.scriptProps}
          />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
          }}
        />
      </Head>
      {props.children}
    </>
  )
}

// https://docs.plausible.io/custom-event-goals#using-custom-props
type Props = Record<string, unknown> | never
type EventOptions<P extends Props> = {
  props: P
  callback?: VoidFunction
}
type EventOptionsTuple<P extends Props> = P extends never
  ? [Omit<EventOptions<P>, 'props'>?]
  : [EventOptions<P>]
type Events = { [K: string]: Props }

export function usePlausible<E extends Events>() {
  return function <N extends keyof E>(
    eventName: N,
    ...rest: EventOptionsTuple<E[N]>
  ) {
    return window.plausible?.(eventName, rest[0])
  }
}
