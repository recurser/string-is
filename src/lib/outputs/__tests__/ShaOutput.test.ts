import { output } from '@lib/outputs/ShaOutput'

describe('outputs', () => {
  describe('ShaOutput', () => {
    describe('output', () => {
      it('generates a SHA hash', () => {
        const input = 'hash this'
        const expected =
          '19467788bc0cf11790a075ea718452cecf0e79db59d1964670475e5fe2e4a611'
        expect(output(input)).toEqual(expected)
      })

      it('allows the algorithm to be specified', () => {
        const input = 'hash this'
        const expected =
          '12fbba297cfbc33bf553c423115db4b8dbc1b965a820627f3bb6201b911015e9106aa39ddb595cb7dbc58ed90b9b118f'
        expect(output(input, { algorithm: 'sha384' })).toEqual(expected)
      })
    })
  })
})
