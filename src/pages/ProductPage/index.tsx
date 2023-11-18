import { useState } from 'react'
import { Product } from '../../components/Product'
import { ProductProps, ProductInfoArrayProps } from '../../types/types'

type ProductPageProps = ProductInfoArrayProps & ProductProps

export function ProductPage(props: ProductPageProps) {
  const [qtd, setQtd] = useState(1)

  function updateQtd(qtd: string) {
    setQtd(Number(qtd))
  }

  return (
    <main id="product-page">
      <Product
        product={props.product}
        productInfo={props.productInfo}
        updateQtd={updateQtd}
      />
    </main>
  )
}
