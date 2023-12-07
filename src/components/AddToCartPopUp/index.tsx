import './styles.css'

import { ProductProps } from '../../types/types'
import { Link } from 'react-router-dom'

export function AddToCartPopUp(props: ProductProps) {
  return (
    <div className="pop-up hidden">
      <h1>Item added to cart!</h1>
      <img
        src={props.product.img_path}
        alt={props.product.product_name}
        title={props.product.product_name}
      />
      <div className="btns">
        <a href="/">
          <button className="to-home">Continue shopping</button>
        </a>
        <Link to={`/cart`}>
          <button className="to-cart">Go to cart</button>
        </Link>
        <Link to={`/checkout`}>
          <button className="to-checkout">Procede to checkout</button>
        </Link>
      </div>
    </div>
  )
}
