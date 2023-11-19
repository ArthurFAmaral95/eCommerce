import { Product } from '../../components/Product'
import { ProductProps, ProductInfoArrayProps } from '../../types/types'

type ProductPageProps = ProductInfoArrayProps & ProductProps

export function ProductPage(props: ProductPageProps) {
  window.scrollTo(0, 0)

  return (
    <main id="product-page">
      <Product product={props.product} productInfo={props.productInfo} />
    </main>
  )
}
