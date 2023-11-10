import './styles.css'

import { DetailedProductBox } from '../../components/DetaliledProductBox'

import {
  ProductsProps,
  ProductsInfoArrayProps,
  PreviousPage,
  NextPage,
  ChoosePage,
  NumberOfPages,
  PageNumber,
  SelectedCategoryProps,
  ProductsOfPageArrayProps
} from '../../types/types'
import { PageBtn } from '../../components/PageBtn'

type SearchResultPageProps = ProductsInfoArrayProps &
  PreviousPage &
  NextPage &
  ChoosePage &
  NumberOfPages &
  PageNumber &
  SelectedCategoryProps &
  ProductsOfPageArrayProps

export function SearchResultPage(props: SearchResultPageProps) {
  window.scroll(0, 0)

  const renderProducts: any = []
  const allPageBtns: any = []

  props.productsOfPage?.map((product: ProductsProps) => {
    const productInfo = [
      {
        item_id: 0,
        brand: '',
        type: '',
        gender: '',
        author: '',
        best_sellet: 0,
        publisher: '',
        seller: '',
        new: 0,
        size: '',
        color: '',
        department: '',
        in_stock: 0,
        storage: 0,
        age: ''
      }
    ]

    for (const item of props.productsInfo) {
      if (item.item_id === product.product_id) {
        productInfo.push(item)
      }
    }

    renderProducts.push(
      <DetailedProductBox
        product={product}
        key={product.product_id}
        productInfo={productInfo[productInfo.length - 1]}
        selectedCategory={props.selectedCategory}
      />
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
    <main id="search-result-page">
      {/* <h1>{pageTitle}</h1>
      <section>{renderSearchPage}</section> */}
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
