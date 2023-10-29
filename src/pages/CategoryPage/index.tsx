import './styles.css'

import {
  SelectedCategoryProps,
  ProductsProps,
  productsOfPageArrayProps,
  PreviousPage,
  NextPage,
  ChoosePage,
  NumberOfPages,
  PageNumber
} from '../../types/types'

import { DetailedProductBox } from '../../components/DetaliledProductBox'
import { PageBtn } from '../../components/PageBtn'

type CategoryPageProps = SelectedCategoryProps &
  productsOfPageArrayProps &
  PreviousPage &
  NextPage &
  ChoosePage &
  NumberOfPages &
  PageNumber

export function CategoryPage(props: CategoryPageProps) {
  window.scrollTo(0, 0)

  const renderProducts: any = []
  const renderPageBtns: any = []

  props.productsOfPage.map((product: ProductsProps) => {
    renderProducts.push(
      <DetailedProductBox product={product} key={product.product_id} />
    )
  })

  for (
    let buttonNumber = 1;
    buttonNumber <= props.numberOfPages;
    buttonNumber++
  ) {
    renderPageBtns.push(
      <PageBtn
        buttonNumber={buttonNumber}
        choosePage={props.choosePage}
        key={buttonNumber}
        pageNumber={props.pageNumber}
      />
    )
  }

  return (
    <main id="category-page">
      <h1 className="category-name">{props.selectedCategory}</h1>
      <div className="products">{renderProducts}</div>
      <div className="page-buttons">
        <button id="previous-btn" onClick={props.previousPage}>
          ← Previous page
        </button>
        {renderPageBtns}
        <button id="next-btn" onClick={props.nextPage}>
          Next page →
        </button>
      </div>
    </main>
  )
}
