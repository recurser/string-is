import { confidence } from '@lib/identities/SqlIdentity'

describe('identities', () => {
  describe('SqlIdentity', () => {
    describe('confidence', () => {
      it('accepts SELECT statements', () => {
        ;[
          'SELECT * FROM users',
          'select * from users',
          '\n SELECT id \n FROM users \n WHERE id = 1 \n',
        ].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('accepts UPDATE statements', () => {
        ;[
          'UPDATE users SET active = true',
          'update users set active = true',
          '\n UPDATE users \n SET active = true \n where id = 1 \n',
        ].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('accepts DELETE statements', () => {
        ;[
          'DELETE FROM users WHERE id = 1',
          'delete from users where id = 1',
          '\n DELETE   FROM users \n where id = 1 \n',
        ].forEach((input) => {
          console.log(input)
          expect(confidence(input)).toEqual(100)
        })
      })

      it('accepts INSERT statements', () => {
        ;[
          'INSERT INTO users VALUES (1, 2, 3)',
          'insert into users values (1, 2, 3)',
          '\n INSERT INTO users \n (field_1, field_2, field_3) \n VALUES (1, 2, 3) \n',
        ].forEach((input) => {
          expect(confidence(input)).toEqual(100)
        })
      })

      it('rejects statements with an incorrect prefix', () => {
        ;[
          'NOT SQL SELECT id \n FROM users \n WHERE id = 1 \n',
          'NOT SQL UPDATE users \n SET active = true \n where id = 1 \n',
          'NOT SQL DELETE FROM users \n where id = 1 \n',
          ' \n NOT SQL SELECT id \n FROM users \n WHERE id = 1 \n',
          ' \n NOT SQL UPDATE users \n SET active = true \n where id = 1 \n',
          ' \n NOT SQL DELETE FROM users \n where id = 1 \n',
        ].forEach((input) => {
          expect(confidence(input)).toEqual(0)
        })
      })

      it('rejects empty input', () => {
        expect(confidence('')).toEqual(0)
      })
    })
  })
})
