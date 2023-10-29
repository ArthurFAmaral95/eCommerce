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
  const allPageBtns: any = []

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
    allPageBtns.push(
      <PageBtn
        buttonNumber={buttonNumber}
        choosePage={props.choosePage}
        key={buttonNumber}
        pageNumber={props.pageNumber}
      />
    )
  }

  let renderPageBtns = []

  if (allPageBtns.length <= 4) {
    renderPageBtns = allPageBtns
  } else if (props.pageNumber + 2 === allPageBtns.length) {
    renderPageBtns = allPageBtns.slice(
      props.pageNumber - 1,
      props.pageNumber + 3
    )
    renderPageBtns.unshift(allPageBtns[0])
  } else if (props.pageNumber + 2 > allPageBtns.length) {
    renderPageBtns = allPageBtns.slice(
      allPageBtns.length - 3,
      allPageBtns.length
    )
    renderPageBtns.unshift(allPageBtns[0])
  } else if (props.pageNumber === 1) {
    renderPageBtns = allPageBtns.slice(
      props.pageNumber - 1,
      props.pageNumber + 1
    )
    renderPageBtns.push(
      <PageBtn
        buttonNumber={999}
        key={999}
        choosePage={props.choosePage}
        pageNumber={9999}
      />
    )
    renderPageBtns.push(allPageBtns[allPageBtns.length - 1])
  } else {
    renderPageBtns = allPageBtns.slice(props.pageNumber - 1, props.pageNumber)
    renderPageBtns.unshift(allPageBtns[0])
    renderPageBtns.push(
      <PageBtn
        buttonNumber={999}
        key={999}
        choosePage={props.choosePage}
        pageNumber={9999}
      />
    )
    renderPageBtns.push(allPageBtns[allPageBtns.length - 1])
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
