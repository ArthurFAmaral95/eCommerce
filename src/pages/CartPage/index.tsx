import './styles.css'

import { CartProductArrayProps, RemoveCartItem, Total } from '../../types/types'
import { CartProductBox } from '../../components/CartProductBox'

type CartPageProps = CartProductArrayProps & RemoveCartItem & Total

export function CartPage(props: CartPageProps) {
  const renderCartProducts: any = []

  for (const product of props.cartProducts) {
    renderCartProducts.push(
      <CartProductBox
        product={product}
        key={product.product.product_id}
        removeCartItem={props.removeCartItem}
      />
    )
  }

  return (
    <main id="cart-page">
      {props.cartProducts.length === 0 ||
      props.cartProducts.length === undefined
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
