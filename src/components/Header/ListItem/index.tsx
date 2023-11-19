import './styles.css'

import { Link } from 'react-router-dom'
import {
  ListItemProps,
  ProductProps,
  SelectProduct
} from '../../../types/types'

type ListItem = ListItemProps & ProductProps & SelectProduct

export function ListItem(props: ListItem) {
  return (
    <Link to={`/product/${props.product.product_id}`}>
      <li
        onClick={() => {
          props.selectProduct(props.product.product_id, props.product.category)

          const searchInput = document.querySelector('input#search-product')

          ;(searchInput as HTMLInputElement).value = ''
        }}
      >
        {props.value}
      </li>
    </Link>
  )
}
