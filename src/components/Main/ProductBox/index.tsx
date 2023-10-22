import './styles.css'

type ProductProps = {
  products: {
    category: string
    img_path: string
    price: number
    product_name: string
    product_id: number
  }
}

export function ProductBox(props: ProductProps) {
  const textPrice = String(props.products.price)
  const splitPrice = textPrice.split('.')
  const priceUnit = splitPrice[0]
  const priceCents = splitPrice[1] || '00'

  console.log({ priceUnit, priceCents })

  return (
    <div className="product-box" title={props.products.product_name}>
      <img src={`${props.products.img_path}`} alt="Product image" />
      <p id="product-name">{props.products.product_name}</p>
      <p id="price">
        <sup>$</sup>&nbsp;
        <span id="unit">{priceUnit}</span>
        <sup>{priceCents}</sup>
      </p>
    </div>
  )
}
