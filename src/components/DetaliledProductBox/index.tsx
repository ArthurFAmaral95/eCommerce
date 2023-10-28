import './styles.css'

import { ProductObjectProps } from '../../types/types'

export function DetailedProductBox(props: ProductObjectProps) {
  const textPrice = String(props.product.price)
  const splitPrice = textPrice.split('.')
  const priceUnit = splitPrice[0]
  const priceCents = splitPrice[1] || '00'

  const productName = props.product.product_name
    .split('')
    .splice(0, 100)
    .join('')

  return (
    <div className="detailed-product-box" title={props.product.product_name}>
      <div className="image">
        <img src={`${props.product.img_path}`} alt="Product image" />
      </div>
      <span className="image-bg"></span>
      <div className="details">
        <p id="product-name" title={props.product.product_name}>
          {productName.length === 100 ? productName + '...' : productName}
        </p>
        <p id="info">alguma info</p>
        <p id="rating">5 ⭐️⭐️⭐️⭐️⭐️</p>
        <p id="price">
          <sup>$</sup>&nbsp;
          <span id="unit">{priceUnit}</span>
          <sup>{priceCents}</sup>
        </p>
        <p id="delivery-date">
          Delivery&nbsp;
          <span>
            friday, december 31<sup>st</sup>
          </span>
        </p>
        <p id="shipping">FREE Shipping</p>
      </div>
    </div>
  )
}
