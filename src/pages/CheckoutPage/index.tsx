import './styles.css'

import {
  CartProductArrayProps,
  Total,
  UserLoggedInProps
} from '../../types/types'
import { CheckoutOverviewListItem } from '../../components/CheckoutOverviewListItem'
import { AddressForm } from '../../components/AddressForm'

type CheckoutPageProps = CartProductArrayProps & Total & UserLoggedInProps

export function CheckoutPage(props: CheckoutPageProps) {
  const renderOverviewList: any = []

  props.cartProducts.map(order => {
    renderOverviewList.push(
      <CheckoutOverviewListItem key={order.orderId} product={order} />
    )
  })

  return (
    <main id="checkout-page">
      <section id="purchase-overview">
        <h2>Purchase Overview</h2>
        <ul className="overview-list">{renderOverviewList}</ul>

        <p>Total: ${props.total}</p>
      </section>
      <hr />
      <section id="delivery-address">
        <h2>Address</h2>
        <AddressForm />
      </section>
      <hr />
      <section id="payment-method">
        <h2>Payment</h2>
      </section>
      <hr />
      <button type="submit" form="address-form">
        Finish Purchase
      </button>
    </main>
  )
}
