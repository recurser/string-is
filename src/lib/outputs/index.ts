export * as Base64DecodeOutput from '@lib/outputs/Base64DecodeOutput'
export * as Base64EncodeOutput from '@lib/outputs/Base64EncodeOutput'
export * as JsonOutput from '@lib/outputs/JsonOutput'
export * as UrlDecodeOutput from '@lib/outputs/UrlDecodeOutput'
export * as UrlEncodeOutput from '@lib/outputs/UrlEncodeOutput'

export interface Output {
  operation: (input: string) => string
  id: string
}
