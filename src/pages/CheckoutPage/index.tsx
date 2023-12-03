import './styles.css'

import {
  CartProductArrayProps,
  Total,
  UserLoggedInProps
} from '../../types/types'

type CheckoutPageProps = CartProductArrayProps & Total & UserLoggedInProps

export function CheckoutPage(props: CheckoutPageProps) {
  return (
    <main id="checkout-page">
      <section id="purchase-overview">
        <h2>Purchase Overview</h2>
      </section>
      <section id="delivery-address">
        <h2>Address</h2>
      </section>
      <section id="payment-method">
        <h2>Payment</h2>
      </section>
      <button>Finish Purchase</button>
    </main>
  )
}
