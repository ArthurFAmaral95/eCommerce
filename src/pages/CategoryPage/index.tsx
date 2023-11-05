import './styles.css'

import {
  SelectedCategoryProps,
  ProductsProps,
  ProductsArrayProps,
  ProductsOfPageArrayProps,
  PreviousPage,
  NextPage,
  ChoosePage,
  NumberOfPages,
  PageNumber,
  ProductsInfoArrayProps,
  SelectFilter,
  ClearFilters,
  SelectedFiltersArrayProps,
  HandleFilters,
  OpenFilters
} from '../../types/types'

import { DetailedProductBox } from '../../components/DetaliledProductBox'
import { PageBtn } from '../../components/PageBtn'
import { FilterBar } from '../../components/FilterBar'
import { FilterMenu } from '../../components/FilterMenu'

type CategoryPageProps = SelectedCategoryProps &
  ProductsOfPageArrayProps &
  PreviousPage &
  NextPage &
  ChoosePage &
  NumberOfPages &
  PageNumber &
  ProductsInfoArrayProps &
  SelectFilter &
  ClearFilters &
  SelectedFiltersArrayProps &
  HandleFilters &
  OpenFilters &
  ProductsArrayProps

type CondensededFilters = {
  field: string
  values: string | number[]
}

export function CategoryPage(props: CategoryPageProps) {
  window.scrollTo(0, 0)

  const renderProducts: any = []
  const allPageBtns: any = []

  const uniqueFilterFields: string[] = []
  const condensededFilters: CondensededFilters[] = []

  props.selectedFilters.map(filter => {
    if (!uniqueFilterFields.includes(filter.field)) {
      uniqueFilterFields.push(filter.field)
    }
  })

  uniqueFilterFields.map(field => {
    const filterValues: string | number[] = []

    props.selectedFilters.map(filter => {
      if (filter.field === field) {
        filterValues.push(filter.value)
      }
    })

    const newFilter = {
      field: field,
      values: filterValues
    }

    condensededFilters.push(newFilter)
  })

  const arrayOfFilteredProducts = []

  for (const filter of condensededFilters) {
    const filteredProducts: number[] = []
    for (const value of filter.values) {
      for (const item of props.productsInfo) {
        for (const info in item) {
          if (
            info === filter.field &&
            item[info] === value &&
            !filteredProducts.includes(item.item_id)
          ) {
            filteredProducts.push(item.item_id)
          }
        }
      }
    }
    arrayOfFilteredProducts.push(filteredProducts)
  }

  const finalFilteredProductsIds: number[] = []

  if (arrayOfFilteredProducts.length === 0) {
  } else {
    for (const base_id of arrayOfFilteredProducts[0]) {
      let isInAllFilters = true
      let countOfMatches = 1
      for (let i = 1; i < arrayOfFilteredProducts.length; i++) {
        for (const id of arrayOfFilteredProducts[i]) {
          if (base_id === id) {
            countOfMatches++
          }
        }
      }

      if (countOfMatches !== arrayOfFilteredProducts.length) {
        isInAllFilters = false
      }

      if (isInAllFilters) {
        finalFilteredProductsIds.push(base_id)
      }
    }
  }

  const filteredProducts: ProductsArrayProps[] = []

  props.products.map((product: ProductsProps | any) => {
    if (finalFilteredProductsIds.includes(product.product_id)) {
      filteredProducts.push(product)
    }
  })

  if (props.selectedFilters.length === 0) {
    props.productsOfPage.map((product: ProductsProps) => {
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
  } else {
    filteredProducts.map((product: ProductsProps | any) => {
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
  }

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
    <>
      <FilterBar
        selectedFilters={props.selectedFilters}
        selectFilter={props.selectFilter}
        handleFilters={props.handleFilters}
      />
      <FilterMenu
        selectedCategory={props.selectedCategory}
        productsInfo={props.productsInfo}
        selectFilter={props.selectFilter}
        clearFilters={props.clearFilters}
        selectedFilters={props.selectedFilters}
        handleFilters={props.handleFilters}
        openFilters={props.openFilters}
      />
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
    </>
  )
}
