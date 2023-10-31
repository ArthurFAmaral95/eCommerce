import { Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'
import { CategoryPage } from './pages/CategoryPage'

//rename

import {
  MainArrayProps,
  SelectedCategoryProps,
  SelectCategory,
  productsOfPageArrayProps,
  PreviousPage,
  NextPage,
  ChoosePage,
  NumberOfPages,
  PageNumber
} from './types/types'

type MainProps = MainArrayProps &
  SelectedCategoryProps &
  SelectCategory &
  productsOfPageArrayProps &
  PreviousPage &
  NextPage &
  ChoosePage &
  NumberOfPages &
  PageNumber

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
            previousPage={props.previousPage}
            nextPage={props.nextPage}
            choosePage={props.choosePage}
            numberOfPages={props.numberOfPages}
            pageNumber={props.pageNumber}
          />
        }
      />
    </Routes>
  )
}
