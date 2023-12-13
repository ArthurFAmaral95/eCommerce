import './styles.css'

import { CartProductArrayProps, RemoveCartItem, Total } from '../../types/types'
import { CartProductBox } from '../../components/CartProductBox'

import { Link } from 'react-router-dom'

type CartPageProps = CartProductArrayProps & RemoveCartItem & Total

export function CartPage(props: CartPageProps) {
  const renderCartProducts: any = []

  if (props.cartProducts.length === 0) {
  } else if (props.cartProducts[0].product.product_id === 0) {
  } else {
    for (const product of props.cartProducts) {
      renderCartProducts.push(
        <CartProductBox
          product={product}
          key={product.orderId}
          removeCartItem={props.removeCartItem}
        />
      )
    }
  }

  return (
    <main id="cart-page">
      <div className="left-side">
        {props.cartProducts.length === 0 ||
        props.cartProducts.length === undefined ||
        props.cartProducts[0].product.product_id === 0
          ? 'Your cart is empty :('
          : renderCartProducts}
      </div>
      <hr />
      <div className={props.total === 0 ? 'right-side hidden' : 'right-side'}>
        <div
          id="cart-container"
          className={
            props.cartProducts.length === 0 ||
            props.cartProducts.length === undefined ||
            props.cartProducts[0].product.product_id === 0
              ? 'hidden'
              : ''
          }
        >
          <div className="order-total">
            <span className="total">Total: </span>
            <span className="value">${props.total}</span>
          </div>
          <Link to={'/checkout'}>
            <button className="to-checkout">Checkout</button>
          </Link>
        </div>
      </div>
    </main>
  )
}
