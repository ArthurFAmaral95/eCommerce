import './styles.css'

import { Link } from 'react-router-dom'

import { CategoryProps, SelectCategory } from '../../../types/types'

type CategoryNameProps = CategoryProps & SelectCategory

export function CategoryName(props: CategoryNameProps) {
  return (
    <h3 className="category-name">
      <Link
        to={`/${props.category}`}
        onClick={() => props.selectCategory(props.category)}
      >
        {props.category}
      </Link>
    </h3>
  )
}
