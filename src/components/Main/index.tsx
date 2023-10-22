import { CategoryName } from './CategoryName'

import { CategoriesProps } from '../Header'

import './styles.css'
import { Gallery } from './Gallery'

export type ProductsProps = {
  category: string
  img_path: string
  price: number
  product_name: string
  product_id: number
}

type MainProps = {
  products: ProductsProps[]
  categories: CategoriesProps[]
}

export function Main(props: MainProps) {
  const renderMain: any = []

  for (const category of props.categories) {
    const productsForGallery = []
    let i = 0
    for (const product of props.products) {
      if (i >= 4) {
        break
      }
      if (product.category !== category.category) {
        continue
      }
      productsForGallery.push(product)
      i++
    }

    renderMain.push(
      <div className="category">
        <div className="category-name-row">
          <CategoryName category={category.category} key={category.id} />
        </div>
        <Gallery products={productsForGallery} key={category.id} />
      </div>
    )
  }

  return <main>{renderMain}</main>
}
