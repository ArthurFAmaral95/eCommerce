import './styles.css'

import { ProductBox } from './ProductBox/index.tsx'

import { ProductsArrayProps, SelectProduct } from '../../types/types'

type GalleryProps = ProductsArrayProps & SelectProduct

export function Gallery(props: GalleryProps) {
  const renderGallery = []

  for (const product of props.products) {
    renderGallery.push(
      <ProductBox
        product={product}
        key={product.product_id}
        selectProduct={props.selectProduct}
      />
    )
  }
  return <div className="products-gallery">{renderGallery}</div>
}
