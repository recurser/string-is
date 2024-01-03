import { output } from '@lib/outputs/SqlOutput'

describe('outputs', () => {
  describe('SqlOutput', () => {
    describe('output', () => {
      it('displays a diff', async () => {
        const input = '\n SELECT id \n FROM users \n WHERE id = 1 \n'
        const expected = `SELECT
  id
FROM
  users
WHERE
  id = 1`
        expect(
          await output(input, { compareString: 'line 1\nline 3\n' }),
        ).toEqual(expected)
      })
    })
  })
})
