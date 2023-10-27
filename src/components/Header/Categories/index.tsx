import './styles.css'

import { Category } from '../Category'

import { CategoriesArrayProps, HandleMenu } from '../../../types/types'

type CategoriesArrayFuncProps = CategoriesArrayProps & HandleMenu

export function Categories(props: CategoriesArrayFuncProps) {
  const renderCategories: any[] = []

  props.categories.map(category => {
    renderCategories.push(
      <Category
        category={category.category}
        key={category.id}
        handleMenu={props.handleMenu}
      />
    )
  })

  return (
    <div className="categories">
      <ul>{renderCategories}</ul>
    </div>
  )
}
