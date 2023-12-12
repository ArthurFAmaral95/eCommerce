import './styles.css'

import { Link } from 'react-router-dom'

import {
  ProductProps,
  ProductInfoArrayProps,
  ShowAddToCartpopUp,
  AddToCart,
  SetBuyNow
} from '../../types/types'

import { SelectInput } from '../SelectInput'

type ProductPageProps = ProductInfoArrayProps &
  ProductProps &
  ShowAddToCartpopUp &
  AddToCart &
  SetBuyNow

export function Product(props: ProductPageProps) {
  const textPrice = String(props.product.price)
  const splitPrice = textPrice.split('.')
  const priceUnit = splitPrice[0]
  const priceCents = splitPrice[1] || '00'

  const productInfoFields: string[] = []

  function setFields() {
    if (
      props.product.category === 'Fashion' ||
      props.product.category === 'Shoes'
    ) {
      productInfoFields.push('size')
      productInfoFields.push('color')
    } else if (
      props.product.category === 'Home' ||
      props.product.category === 'Sports'
    ) {
      productInfoFields.push('new')
      productInfoFields.push('color')
    } else if (props.product.category === 'Phones') {
      productInfoFields.push('new')
      productInfoFields.push('color')
      productInfoFields.push('storage')
    } else if (
      props.product.category === 'Eletronics' ||
      props.product.category === 'Computers' ||
      props.product.category === 'Game' ||
      props.product.category === 'TV & Audio' ||
      props.product.category === 'Tools'
    ) {
      productInfoFields.push('new')
    }
  }
  setFields()

  const renderSelectInputs: any = []

  productInfoFields.map(field => {
    const values: string[] = []
    for (const item of props.productInfo) {
      for (const info in item) {
        if (
          info === field &&
          !values.includes(
            String((item as unknown as string)[info as unknown as number])
          )
        ) {
          values.push(
            String((item as unknown as string)[info as unknown as number])
          )
        }
      }
    }
    if (values.includes('1')) {
      values.splice(values.indexOf('1'), 1, 'New')
    }

    if (values.includes('0')) {
      values.splice(values.indexOf('0'), 1, 'Used')
    }

    renderSelectInputs.push(
      <SelectInput selectId={field} values={values} key={field} />
    )
  })

  return (
    <div className="product">
      <div className="left-side">
        <h2 className="product-name">{props.product.product_name}</h2>
        <img
          src={props.product.img_path}
          alt={props.product.product_name}
          title={props.product.product_name}
        />
      </div>
      <hr />
      <div className="right-side">
        <div className="info">
          <p className="price">
            <sup className="over-line">$</sup>&nbsp;
            <span className="unit">{priceUnit}</span>
            <sup className="over-line">{priceCents}</sup>
          </p>
          <span className="delivery">FREE shipping</span>

          <form className="select-inputs">
            <SelectInput
              selectId="qtd"
              values={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
              key={`qtd`}
            />
            {renderSelectInputs}
          </form>
          <div className="btns">
            <button
              className="add-to-cart"
              onClick={() => {
                props.addToCart(props.product)
                props.showAddToCartpopUp()
              }}
            >
              Add to cart
            </button>
            <Link to={`/buynowcheckout`}>
              <button
                className="buy-now"
                onClick={() => {
                  props.setBuyNow(props.product)
                }}
              >
                Buy now
              </button>
            </Link>
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
    </div>
  )
}
