import './styles.css'

import { ProductBox } from './ProductBox/index.tsx'

import { ProductsArrayProps } from '../../types/types'

export function Gallery(props: ProductsArrayProps) {
  const renderGallery = []

  for (const product of props.products) {
    renderGallery.push(
      <ProductBox product={product} key={product.product_id} />
    )
  }
  return <div className="products-gallery">{renderGallery}</div>
}
