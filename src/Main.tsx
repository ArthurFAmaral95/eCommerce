import { Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'
import { CategoryPage } from './pages/CategoryPage'

import {
  MainArrayProps,
  SelectedCategoryProps,
  SelectCategory,
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
  OpenFilters,
  SelectProduct
} from './types/types'
import { SearchResultPage } from './pages/SearchResultPage'
import { ProductPage } from './pages/ProductPage'

type MainProps = MainArrayProps &
  SelectedCategoryProps &
  SelectCategory &
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
  SelectProduct

export function Main(props: MainProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            categories={props.categories}
            products={props.products}
            selectCategory={props.selectCategory}
            selectProduct={props.selectProduct}
          />
        }
      />
      <Route
        path={`/${props.selectedCategory}`}
        element={
          <CategoryPage
            selectedCategory={props.selectedCategory}
            productsOfPage={props.productsOfPage}
            productsInfo={props.productsInfo}
            previousPage={props.previousPage}
            nextPage={props.nextPage}
            choosePage={props.choosePage}
            numberOfPages={props.numberOfPages}
            pageNumber={props.pageNumber}
            selectFilter={props.selectFilter}
            clearFilters={props.clearFilters}
            selectedFilters={props.selectedFilters}
            handleFilters={props.handleFilters}
            openFilters={props.openFilters}
          />
        }
      />
      <Route
        path={`/${props.selectedCategory}/search`}
        element={
          <SearchResultPage
            selectedCategory={props.selectedCategory}
            productsOfPage={props.productsOfPage}
            productsInfo={props.productsInfo}
            previousPage={props.previousPage}
            nextPage={props.nextPage}
            choosePage={props.choosePage}
            numberOfPages={props.numberOfPages}
            pageNumber={props.pageNumber}
          />
        }
      />
      <Route
        path={`/product/${props.products[0].product_id}`}
        element={
          <ProductPage
            product={props.products[0]}
            productInfo={props.productsInfo}
          />
        }
      />
    </Routes>
  )
}
