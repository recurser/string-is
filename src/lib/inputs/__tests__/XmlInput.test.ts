import { input } from '@lib/inputs/XmlInput'

describe('inputs', () => {
  describe('XmlInput', () => {
    describe('input', () => {
      it('parses the input', () => {
        const data = `<?xml version="1.0" encoding="UTF-8"?>  <note> text </note>`
        const expected = { note: 'text' }
        expect(input(data)).toEqual(expected)
      })

      it('gives up given an empty input', () => {
        expect(input('')).toBeUndefined()
      })
    })
  })
})
