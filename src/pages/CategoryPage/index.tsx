import './styles.css'

import {
  SelectedCategoryProps,
  ProductsProps,
  productsOfPageArrayProps,
  PreviousPage,
  NextPage,
  ChoosePage,
  NumberOfPages
} from '../../types/types'

import { DetailedProductBox } from '../../components/DetaliledProductBox'

type CategoryPageProps = SelectedCategoryProps &
  productsOfPageArrayProps &
  PreviousPage &
  NextPage &
  ChoosePage &
  NumberOfPages

export function CategoryPage(props: CategoryPageProps) {
  window.scrollTo(0, 0)

  const renderProducts: any = []

  console.log(props.productsOfPage)
  props.productsOfPage.map((product: ProductsProps) => {
    renderProducts.push(
      <DetailedProductBox product={product} key={product.product_id} />
    )
  })

  return (
    <main id="category-page">
      <h1 className="category-name">{props.selectedCategory}</h1>
      <div className="products">{renderProducts}</div>
      <div className="page-buttons">
        <button onClick={props.previousPage}>Previous page</button>
        <button onClick={() => props.choosePage(1)}>1</button>
        <button onClick={() => props.choosePage(2)}>2</button>
        <button onClick={props.nextPage}>Next page</button>
      </div>
    </main>
  )
}
