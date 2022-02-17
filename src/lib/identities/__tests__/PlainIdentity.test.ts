import { randomBytes } from 'crypto'

import { confidence } from '@lib/identities/PlainIdentity'

describe('identities', () => {
  describe('PlainIdentity', () => {
    describe('confidence', () => {
      it('accepts anything', () => {
        const input = randomBytes(50).toString('hex')
        expect(confidence(input)).toEqual(1)
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
