import './styles.css'

import { Link } from 'react-router-dom'

import { CategoryProps } from '../../../types/types'

export function CategoryName(props: CategoryProps) {
  return (
    <h3 className="category-name">
      <Link to={`/${props.category}`}>{props.category}</Link>
    </h3>
  )
}
