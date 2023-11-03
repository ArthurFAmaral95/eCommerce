import './styles.css'

import {
  ProductObjectProps,
  ProductInfoObjectProps,
  SelectedCategoryProps
} from '../../types/types'
import { ProductInfo } from '../ProductInfo'

type DetailedProductBoxProps = ProductObjectProps &
  ProductInfoObjectProps &
  SelectedCategoryProps

export function DetailedProductBox(props: DetailedProductBoxProps) {
  const textPrice = String(props.product.price)
  const splitPrice = textPrice.split('.')
  const priceUnit = splitPrice[0]
  const priceCents = splitPrice[1] || '00'

  const productName = props.product.product_name
    .split('')
    .splice(0, 100)
    .join('')

  const highlightBrand =
    props.selectedCategory === 'Automotive' ||
    props.selectedCategory === 'Baby' ||
    props.selectedCategory === 'Computers' ||
    props.selectedCategory === 'Eletronics' ||
    props.selectedCategory === 'Home' ||
    props.selectedCategory === 'Office' ||
    props.selectedCategory === 'Phones' ||
    props.selectedCategory === 'Shoes' ||
    props.selectedCategory === 'Sports' ||
    props.selectedCategory === 'Toys' ||
    props.selectedCategory === 'TV & Audio'

  const highlightAuthor = props.selectedCategory === 'Books'

  const highlightDepartment = props.selectedCategory === 'Games'

  let highlightedProductInfo: string = ''

  if (highlightBrand) {
    highlightedProductInfo = `by ${props.productInfo.brand}`
  } else if (highlightAuthor) {
    highlightedProductInfo = `by ${props.productInfo.author}`
  } else if (highlightDepartment) {
    highlightedProductInfo = `${props.productInfo.department}`
  }

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
        <ProductInfo info={highlightedProductInfo} />
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
