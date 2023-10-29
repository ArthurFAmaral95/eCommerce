import { Link } from 'react-router-dom'

import './styles.css'

import { CategoryProps, HandleMenu, SelectCategory } from '../../../types/types'

type CategoryFuncProps = CategoryProps & HandleMenu & SelectCategory

export function Category(props: CategoryFuncProps) {
  return (
    <>
      <li>
        <Link
          to={`/${props.category}`}
          onClick={() => {
            props.handleMenu(false)
            props.selectCategory(props.category)
          }}
        >
          {props.category}
        </Link>
      </li>
    </>
  )
}
