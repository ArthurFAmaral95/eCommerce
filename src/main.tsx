import { Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'
import { CategoryPage } from './pages/CategoryPage'

import { MainArrayProps, SelectedCategoryProps } from './types/types'

type MainProps = MainArrayProps & SelectedCategoryProps

export function Main(props: MainProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            categories={props.categories}
            products={props.products}
          />
        }
      />
      <Route
        path={`/${props.selectedCategory}`}
        element={<CategoryPage selectedCategory={props.selectedCategory} />}
      />
    </Routes>
  )
}
