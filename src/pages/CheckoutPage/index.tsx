import './styles.css'

import {
  CartProductArrayProps,
  Total,
  UserLoggedInProps
} from '../../types/types'

import { AddressFormProps } from '../../components/AddressForm'

import { CheckoutOverviewListItem } from '../../components/CheckoutOverviewListItem'
import { AddressForm } from '../../components/AddressForm'
import { PaymentForm } from '../../components/PaymentForm'

type CheckoutPageProps = CartProductArrayProps & Total & UserLoggedInProps

export function CheckoutPage(props: CheckoutPageProps) {
  const addressFormBtn: HTMLFormElement | null = document.querySelector(
    'button#address-form'
  )
  const paymentFormBtn: HTMLFormElement | null = document.querySelector(
    'button#payment-form'
  )

  const renderOverviewList: any = []

  props.cartProducts.map(order => {
    renderOverviewList.push(
      <CheckoutOverviewListItem key={order.orderId} product={order} />
    )
  })

  function getAddressData(address: AddressFormProps) {
    const stringAddress = JSON.stringify(address)

    console.log(stringAddress)
  }

  // function getPaymentData(payment: any) {
  //   const stringPayment = JSON.stringify(payment)
  //   console.log(stringPayment)
  // }

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
        <AddressForm getAddressData={getAddressData} />
      </section>
      <hr />
      <section id="payment-method">
        <h2>Payment</h2>
        <PaymentForm />
      </section>
      <hr />
      <button id="address-form" type="submit" form="address-form"></button>
      <button
        id="payment-form"
        type="submit"
        form="payment-form"
        onClick={() => {
          console.log('payment')
        }}
      ></button>
      <button
        onClick={() => {
          addressFormBtn?.click()
          paymentFormBtn?.click()
        }}
      >
        Finish Purchase
      </button>
    </main>
  )
}
