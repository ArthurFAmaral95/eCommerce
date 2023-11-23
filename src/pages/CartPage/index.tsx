import './styles.css'

import { CartProductArrayProps, RemoveCartItem, Total } from '../../types/types'
import { CartProductBox } from '../../components/CartProductBox'

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
      {props.cartProducts.length === 0 ||
      props.cartProducts.length === undefined ||
      props.cartProducts[0].product.product_id === 0
        ? 'Your cart is empty :('
        : renderCartProducts}
      <hr />
      <div className="order-total">
        <span className="total">Total: </span>
        <span className="value">${props.total}</span>
      </div>
      <button className="checkout">Checkout</button>
    </main>
  )
}
