import './styles.css'

import {
  ProductProps,
  ProductInfoArrayProps,
  UpdateQtd
} from '../../types/types'
import { Place } from '../Header/Place'

type ProductPageProps = ProductInfoArrayProps & ProductProps & UpdateQtd

export function Product(props: ProductPageProps) {
  const textPrice = String(props.product.price)
  const splitPrice = textPrice.split('.')
  const priceUnit = splitPrice[0]
  const priceCents = splitPrice[1] || '00'

  return (
    <div className="product">
      <h2 className="product-name">{props.product.product_name}</h2>
      <img src={props.product.img_path} alt="Product image" />
      <hr />
      <div className="info">
        <p className="price">
          <sup className="over-line">$</sup>&nbsp;
          <span className="unit">{priceUnit}</span>
          <sup className="over-line">{priceCents}</sup>
        </p>
        <span className="delivery">FREE shipping</span>
        <Place imgPath="../location-colored.svg" />
        <div className="select-qtd">
          <span>Qtd.</span>
          <select
            name="qtd"
            id="qtd"
            onChange={e => {
              props.updateQtd(e.target.value)
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="btns">
          <button className="add-to-cart">Add to cart</button>
          <button className="buy-now">Buy now</button>
        </div>
        <div className="sender-seller">
          <span>Delivered by</span>
          <span>e-Commerce</span>
        </div>
        <div className="sender-seller">
          <span>Sold by</span>
          <span>
            {props.productInfo[0].seller
              ? props.productInfo[0].seller
              : 'e-Commerce'}
          </span>
        </div>
      </div>
    </div>
  )
}
