import './styles.css'

import { ProductProps } from '../../types/types'

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
          <button>Continue shopping</button>
        </a>
        <button>Procede to checkout</button>
      </div>
    </div>
  )
}
