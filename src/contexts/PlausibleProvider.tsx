// Based on the excellent next-plausible by @4lejandrito
//
// Extracted to keep 3rd-party dependencies to a minimum, since it's fairly simple.
//
// @see https://github.com/4lejandrito/next-plausible/blob/83ca6ae0c13dc2f5e1f438ffbc744993437432bd/index.tsx

import React, { ReactNode } from 'react'
import Head from 'next/head'
import { NextConfig } from 'next'
import getConfig from 'next/config'

type NextPlausibleProxyOptions = {
  subdirectory?: string
  scriptName?: string
  customDomain?: string
}

const allModifiers = [
  'exclusions',
  'local',
  'manual',
  'outbound-links',
] as const
type ScriptModifier = typeof allModifiers[number]

function getCombinations<T>(elements: readonly T[]): T[][] {
  const combinations: T[][] = []

  for (let i = 0; i < elements.length; i++) {
    combinations.push([elements[i]])
    if (i < elements.length - 1) {
      getCombinations(elements.slice(i + 1)).forEach((combination) => {
        combinations.push([elements[i], ...combination])
      })
    }
  }

  return combinations
}

const getScriptPath = (
  options: NextPlausibleProxyOptions,
  ...modifiers: (ScriptModifier | null)[]
) => {
  const basePath = `/js/${[
    options.scriptName ?? 'script',
    ...modifiers.sort().filter((modifier) => modifier !== null),
  ].join('.')}.js`
  if (options.subdirectory) {
    return `/${options.subdirectory}${basePath}`
  } else {
    return basePath
  }
}

const plausibleDomain = 'https://plausible.io'

const getRemoteScriptName = (domain: string, selfHosted?: boolean) =>
  selfHosted || domain === plausibleDomain ? 'plausible' : 'index'

const getDomain = (options: { customDomain?: string }) =>
  options.customDomain ?? plausibleDomain

const getApiEndpoint = (options: NextPlausibleProxyOptions) =>
  `/${options.subdirectory ?? 'proxy'}/api/event`

export function withPlausibleProxy(options: NextPlausibleProxyOptions = {}) {
  return (nextConfig: NextConfig): NextConfig => ({
    ...nextConfig,
    publicRuntimeConfig: {
      ...nextConfig.publicRuntimeConfig,
      nextPlausibleProxyOptions: options,
    },
    rewrites: async () => {
      const domain = getDomain(options)
      const getRemoteScript = (...modifiers: (ScriptModifier | null)[]) =>
        domain +
        getScriptPath(
          {
            scriptName: getRemoteScriptName(domain, domain !== plausibleDomain),
          },
          ...modifiers,
        )
      const plausibleRewrites = [
        {
          destination: getRemoteScript(),
          source: getScriptPath(options),
        },
        ...getCombinations(allModifiers).map((modifiers) => ({
          destination: getRemoteScript(...modifiers),
          source: getScriptPath(options, ...modifiers),
        })),
        {
          destination: `${domain}/api/event`,
          source: getApiEndpoint(options),
        },
      ]

      if (process.env.NEXT_PLAUSIBLE_DEBUG) {
        console.log('plausibleRewrites = ', plausibleRewrites)
      }

      const rewrites = await nextConfig.rewrites?.()

      if (!rewrites) {
        return plausibleRewrites
      } else if (Array.isArray(rewrites)) {
        return rewrites.concat(plausibleRewrites)
      } else {
        rewrites.afterFiles = rewrites.afterFiles.concat(plausibleRewrites)
        return rewrites
      }
    },
  })
}

export const PlausibleProvider = (props: {
  domain: string
  customDomain?: string
  children: ReactNode | ReactNode[]
  manualPageviews?: boolean
  trackLocalhost?: boolean
  trackOutboundLinks?: boolean
  exclude?: string
  selfHosted?: boolean
  enabled?: boolean
  integrity?: string
  scriptProps?: React.DetailedHTMLProps<
    React.ScriptHTMLAttributes<HTMLScriptElement>,
    HTMLScriptElement
  >
}) => {
  const { enabled = process.env.NODE_ENV === 'production' } = props
  const domain = getDomain(props)
  const proxyOptions: NextPlausibleProxyOptions | undefined =
    getConfig()?.publicRuntimeConfig?.nextPlausibleProxyOptions

  return (
    <>
      <Head>
        {enabled && (
          <script
            async={true}
            crossOrigin={props.integrity ? 'anonymous' : undefined}
            data-api={proxyOptions ? getApiEndpoint(proxyOptions) : undefined}
            data-domain={props.domain}
            data-exclude={props.exclude}
            defer={true}
            integrity={props.integrity}
            src={
              (proxyOptions ? '' : domain) +
              getScriptPath(
                {
                  ...proxyOptions,
                  scriptName: proxyOptions
                    ? proxyOptions.scriptName
                    : getRemoteScriptName(domain, props.selfHosted),
                },
                props.trackLocalhost ? 'local' : null,
                props.manualPageviews ? 'manual' : null,
                props.trackOutboundLinks ? 'outbound-links' : null,
                props.exclude ? 'exclusions' : null,
              )
            }
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

export function usePlausible<E extends Events = any>() {
  return function <N extends keyof E>(
    eventName: N,
    ...rest: EventOptionsTuple<E[N]>
  ) {
    return (window as any).plausible?.(eventName, rest[0])
  }
}
