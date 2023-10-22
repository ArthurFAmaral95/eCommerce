import './styles.css'

import { ProductsProps } from '../../Main/index'
import { ProductBox } from '../ProductBox'

type GalleryProps = {
  products: ProductsProps[]
}

export function Gallery(props: GalleryProps) {
  const renderGallery = []

  for (const product of props.products) {
    renderGallery.push(
      <ProductBox product={product} key={product.product_id} />
    )
  }
  return <div className="products-gallery">{renderGallery}</div>
}
