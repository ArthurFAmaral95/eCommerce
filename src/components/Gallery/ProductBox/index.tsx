import './styles.css'

import { ProductObjectProps, SelectProduct } from '../../../types/types'
import { Link } from 'react-router-dom'

type ProductBox = ProductObjectProps & SelectProduct

export function ProductBox(props: ProductBox) {
  const textPrice = String(props.product.price)
  const splitPrice = textPrice.split('.')
  const priceUnit = splitPrice[0]
  const priceCents = splitPrice[1] || '00'

  const productName = props.product.product_name
    .split('')
    .splice(0, 40)
    .join('')

  return (
    <Link to={`/product/${props.product.product_id}`}>
      <div
        className="product-box"
        title={props.product.product_name}
        onClick={() => {
          props.selectProduct(props.product.product_id, props.product.category)
        }}
      >
        <div className="image">
          <img src={`${props.product.img_path}`} alt="Product image" />
        </div>
        <span className="image-bg"></span>
        <div className="details">
          <p id="product-name" title={props.product.product_name}>
            {productName.length === 40 ? productName + '...' : productName}
          </p>
          <p id="price">
            <sup>$</sup>&nbsp;
            <span id="unit">{priceUnit}</span>
            <sup>{priceCents}</sup>
          </p>
        </div>
      </div>
    </Link>
  )
}
