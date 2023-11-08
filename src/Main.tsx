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
  OpenFilters
} from './types/types'
import { SearchResultPage } from './pages/SearchResultPage'

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
  OpenFilters

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
      <Route path={`/search`} element={<SearchResultPage />} />
    </Routes>
  )
}
