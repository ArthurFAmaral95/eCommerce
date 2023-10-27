import { Link } from 'react-router-dom'

import './styles.css'

import { CategoryProps, HandleMenu } from '../../../types/types'

type CategoryFuncProps = CategoryProps & HandleMenu

export function Category(props: CategoryFuncProps) {
  return (
    <>
      <li>
        <Link to={`/${props.category}`} onClick={() => props.handleMenu(false)}>
          {props.category}
        </Link>
      </li>
    </>
  )
}
