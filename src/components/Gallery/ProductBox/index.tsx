import './styles.css'

import { ProductObjectProps } from '../../../types/types'

export function ProductBox(props: ProductObjectProps) {
  const textPrice = String(props.product.price)
  const splitPrice = textPrice.split('.')
  const priceUnit = splitPrice[0]
  const priceCents = splitPrice[1] || '00'

  const productName = props.product.product_name
    .split('')
    .splice(0, 40)
    .join('')

  return (
    <div className="product-box" title={props.product.product_name}>
      <img src={`${props.product.img_path}`} alt="Product image" />
      <p id="product-name" title={props.product.product_name}>
        {productName.length === 40 ? productName + '...' : productName}
      </p>
      <p id="price">
        <sup>$</sup>&nbsp;
        <span id="unit">{priceUnit}</span>
        <sup>{priceCents}</sup>
      </p>
    </div>
  )
}
