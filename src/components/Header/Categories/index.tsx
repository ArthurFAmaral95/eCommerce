import './styles.css'

import { HeaderProps } from '../index'
import { Category } from '../Category'

export function Categories(props: HeaderProps) {
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
