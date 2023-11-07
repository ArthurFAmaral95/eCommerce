import './styles.css'

import { FieldProps } from '../../types/types'

export function FilterField(props: FieldProps) {
  let fieldName = ''

  if (props.field === 'new') {
    fieldName = 'Condition'
  } else if (props.field === 'in_stock') {
    fieldName = 'In Stock'
  } else if (props.field === 'best_seller') {
    fieldName = 'Bestseller'
  } else {
    fieldName = props.field
  }

  return <h3 className="filter-field">{fieldName}</h3>
}
