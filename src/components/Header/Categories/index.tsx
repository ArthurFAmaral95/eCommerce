import './styles.css'

import { Category } from '../Category'

import { CategoriesArrayProps } from '../../../types/types'

export function Categories(props: CategoriesArrayProps) {
  const renderCategories: any[] = []

  props.categories.map(category => {
    renderCategories.push(
      <Category category={category.category} key={category.id} />
    )
  })

  return (
    <div className="categories">
      <ul>{renderCategories}</ul>
    </div>
  )
}
