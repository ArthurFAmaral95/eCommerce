import './styles.css'

import { CartProductBox } from '../../components/CartProductBox'

export function CartPage() {
  const products = JSON.parse(localStorage.getItem('order') || 'false')

  const renderCartProducts: any = []

  for (const product of products) {
    renderCartProducts.push(<CartProductBox product={product} />)
  }

  return (
    <main id="cart-page">
      {renderCartProducts}
      <hr />
      <div className="order-total">
        <span className="total">Total: </span>
        <span className="value">$1234</span>
      </div>
      <button className="checkout">Checkout</button>
    </main>
  )
}
