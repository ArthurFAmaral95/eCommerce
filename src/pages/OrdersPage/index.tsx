import { UserName } from '../../types/types'

type OrdersPageProps = UserName

export function OrdersPage(props: OrdersPageProps) {
  return (
    <main id="orders-page">
      <h2>Hello, {props.userName}</h2>
      <h3>Your orders</h3>
    </main>
  )
}
