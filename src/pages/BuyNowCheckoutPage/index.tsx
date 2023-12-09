import {
  UserLoggedInProps,
  ClearBuyNow,
  CartProductProps
} from '../../types/types'

import { AddressForm } from '../../components/AddressForm'
import { PaymentForm } from '../../components/PaymentForm'
import { Card } from '../../components/Card'

import { AddressFormProps } from '../../components/AddressForm'
import { PaymentFormProps } from '../../components/PaymentForm'
import { CheckoutOverviewListItem } from '../../components/CheckoutOverviewListItem'

import { useState, useEffect } from 'react'

import axios from 'axios'

type BuyNowProps = UserLoggedInProps & ClearBuyNow

export function BuyNowCheckoutPage(props: BuyNowProps) {
  window.scrollTo(0, 0)

  const [address, setAddress] = useState('')
  const [payment, setPayment] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (address !== '' && payment !== '') {
      finishPurchase()
    }
  }, [address, payment])

  const product: CartProductProps = JSON.parse(
    localStorage.getItem('buyNow') || 'false'
  )

  const price = product.product.price
  const qtd = Number(product.configs[0].value)
  const total = qtd * price

  function getAddressData(address: AddressFormProps) {
    const stringAddress = JSON.stringify(address)
    setAddress(stringAddress)
  }

  function getPaymentData(payment: PaymentFormProps) {
    const stringPayment = JSON.stringify(payment)
    setPayment(stringPayment)
  }

  function finishPurchase() {
    if (!props.userLoggedIn) {
      const errorSpan = document.querySelector('#error-message')
      errorSpan?.classList.remove('hidden')
      setMessage('Please login to continue shopping.')
    } else {
      const userId = JSON.parse(localStorage.getItem('user') || 'false').userId

      axios
        .post('http://localhost:4001/finishPurchase', {
          userId: userId,
          products: localStorage.getItem('buyNow'),
          total: total,
          address: address,
          payment: payment,
          dateTime: new Date().toLocaleString()
        })
        .then(response => {
          const container = document.querySelector('.checkout-container')
          const successP = document.querySelector('#success-message')

          container?.classList.add('hidden')
          successP?.classList.remove('hidden')
          setMessage(response.data.message)
          props.clearBuyNow()
        })
        .catch(error => {
          const errorSpan = document.querySelector('#error-message')
          errorSpan?.classList.remove('hidden')
          setMessage(error.response.data.message)
        })
    }
  }

  return (
    <main id="buy-now-checkout-page">
      <div className="checkout-container">
        <section id="purchase-overview">
          <h2>Purchase Overview</h2>
          <ul className="overview-list">
            <CheckoutOverviewListItem key={product.orderId} product={product} />
          </ul>

          <p>Total: ${total}</p>
        </section>
        <hr />
        <section id="delivery-address">
          <h2>Address</h2>
          <AddressForm getAddressData={getAddressData} />
        </section>
        <hr />
        <section id="payment-method">
          <h2>Payment</h2>
          <PaymentForm getPaymentData={getPaymentData} />
          <Card />
        </section>
        <hr />
        <button id="address-form" type="submit" form="address-form"></button>
        <button id="payment-form" type="submit" form="payment-form"></button>
        <button
          onClick={() => {
            const addressFormBtn: HTMLFormElement | null =
              document.querySelector('button#address-form')
            const paymentFormBtn: HTMLFormElement | null =
              document.querySelector('button#payment-form')
            addressFormBtn?.click()
            paymentFormBtn?.click()
          }}
        >
          Finish Purchase
        </button>
        <span id="error-message" className="hidden">
          {message}
        </span>
      </div>
      <p id="success-message" className="hidden">
        {message}
      </p>
    </main>
  )
}
