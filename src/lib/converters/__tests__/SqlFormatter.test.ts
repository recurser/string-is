import { SqlFormatter } from '@lib/converters'
import { expectOutput } from './_helpers'

describe('converters', () => {
  describe('SqlFormatter', () => {
    it('formats SCSS', async () => {
      await expectOutput(
        SqlFormatter,
        `select orders.order_id, customers.customer_name, shippers.shipper_name
from orders
inner join customers on orders.customer_id = customers.customer_id
inner join shippers on orders.shipper_id = shippers.shipper_id`,
        'sql-output',
        `SELECT
  orders.order_id,
  customers.customer_name,
  shippers.shipper_name
FROM
  orders
  INNER JOIN customers ON orders.customer_id = customers.customer_id
  INNER JOIN shippers ON orders.shipper_id = shippers.shipper_id`,
      )
    })
  })
})
