import './styles.css'

export function ShoppingCart() {
  const cartCount = JSON.parse(localStorage.getItem('order') || 'false').length

  return (
    <div className="shopping-cart">
      <span
        className={cartCount === undefined ? 'cart-count hidden' : 'cart-count'}
      >
        {cartCount}
      </span>
      <img src="./cart-icon.svg" alt="cart icon" id="cart-icon" />
    </div>
  )
}
