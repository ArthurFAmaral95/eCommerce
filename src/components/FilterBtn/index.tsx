import './styles.css'

import {
  ValueProps,
  FieldProps,
  SelectFilter,
  SelectedFiltersArrayProps
} from '../../types/types'

type FilterBtnProps = ValueProps &
  FieldProps &
  SelectFilter &
  SelectedFiltersArrayProps

export function FilterBtn(props: FilterBtnProps) {
  let value = props.value

  let selected = false

  if (props.value === 1 && props.field === 'new') {
    value = 'New'
  } else if (props.value === 0 && props.field === 'new') {
    value = 'Used'
  } else if (props.value === 1 && props.field === 'best_seller') {
    value = 'Bestseller'
  } else if (props.value === 0 && props.field === 'best_seller') {
    value = 'No Bestseller'
  } else if (props.value === 1 && props.field === 'in_stock') {
    value = 'In Stock'
  } else if (props.value === 0 && props.field === 'in_stock') {
    value = 'Out of Stock'
  }

  props.selectedFilters.map(filter => {
    if (filter.field === props.field && filter.value === props.value) {
      selected = true
    }
  })

  return (
    <button
      className={selected ? 'filter-btn selected' : 'filter-btn'}
      onClick={() => {
        props.selectFilter(props.field, props.value)
      }}
    >
      {value}
    </button>
  )
}
