import { SelectedCategoryProps } from '../../types/types'

export function CategoryPage(props: SelectedCategoryProps) {
  return (
    <main>
      <h1>{props.selectedCategory}</h1>
    </main>
  )
}
