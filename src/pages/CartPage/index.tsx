import './styles.css'

import { CartProductProps } from '../../types/types'
import { CartProductBox } from '../../components/CartProductBox'
import { useEffect, useState } from 'react'

export function CartPage() {
  const [cartProducts, setCartProducts] = useState<CartProductProps[]>([
    {
      configs: [{ id: '', value: '' }],
      product: {
        category: '',
        product_name: '',
        price: 0,
        img_path: '',
        product_id: 0
      }
    }
  ])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    populateCartProducts()
  }, [])

  useEffect(() => {
    sumTotal()
  }, [cartProducts])

  const renderCartProducts: any = []

  for (const product of cartProducts) {
    renderCartProducts.push(
      <CartProductBox
        product={product}
        key={product.product.product_id}
        removeCartItem={removeCartItem}
      />
    )
  }

  function populateCartProducts() {
    setCartProducts(JSON.parse(localStorage.getItem('order') || 'false'))
  }

  function sumTotal() {
    let total = 0
    for (const product of cartProducts) {
      let productTotal =
        Number(product.product.price) * Number(product.configs[0].value)

      total += productTotal
    }
    setTotal(Number(total.toFixed(2)))
  }

  function removeCartItem(id: number) {
    const updatedCart: CartProductProps[] = []

    cartProducts.map(product => {
      if (product.product.product_id !== id) {
        updatedCart.push(product)
      }
    })

    localStorage.setItem('order', JSON.stringify(updatedCart))
    populateCartProducts()
  }

  return (
    <main id="cart-page">
      {renderCartProducts}
      <hr />
      <div className="order-total">
        <span className="total">Total: </span>
        <span className="value">${total}</span>
      </div>
      <button className="checkout">Checkout</button>
    </main>
  )
}
