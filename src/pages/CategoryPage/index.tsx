import './styles.css'

import { SelectedCategoryProps, ProductsArrayProps } from '../../types/types'

import { DetailedProductBox } from '../../components/DetaliledProductBox'

type CategoryPageProps = SelectedCategoryProps & ProductsArrayProps

export function CategoryPage(props: CategoryPageProps) {
  window.scrollTo(0, 0)

  const renderProducts: any = []

  props.products.map(product => {
    renderProducts.push(
      <DetailedProductBox product={product} key={product.product_id} />
    )
  })

  return (
    <main id="category-page">
      <h1 className="category-name">{props.selectedCategory}</h1>
      <div className="products">{renderProducts}</div>
    </main>
  )
}
