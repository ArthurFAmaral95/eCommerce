import './styles.css'

import { Category } from '../Category'

import {
  CategoriesArrayProps,
  HandleMenu,
  SelectCategory
} from '../../../types/types'

type CategoriesArrayFuncProps = CategoriesArrayProps &
  HandleMenu &
  SelectCategory

export function Categories(props: CategoriesArrayFuncProps) {
  const renderCategories: any[] = []

  props.categories.map(category => {
    renderCategories.push(
      <Category
        category={category.category}
        key={category.id}
        handleMenu={props.handleMenu}
        selectCategory={props.selectCategory}
      />
    )
  })

  return (
    <div className="categories">
      <ul>{renderCategories}</ul>
    </div>
  )
}
