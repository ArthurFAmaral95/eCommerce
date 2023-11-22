import './styles.css'

import { Link } from 'react-router-dom'

export function ShoppingCart() {
  const cartCount = JSON.parse(localStorage.getItem('order') || 'false').length

  return (
    <Link to={`/cart`}>
      <div className="shopping-cart">
        <span
          className={
            cartCount === undefined || cartCount === 0
              ? 'cart-count hidden'
              : 'cart-count'
          }
        >
          {cartCount}
        </span>
        <img src="./cart-icon.svg" alt="cart icon" id="cart-icon" />
      </div>
    </Link>
  )
}
