import { Link } from 'react-router-dom'

import './styles.css'

import { CategoryProps } from '../../../types/types'

export function Category(props: CategoryProps) {
  return (
    <>
      <li>
        <Link to={'/test'}>{props.category}</Link>
      </li>
    </>
  )
}
