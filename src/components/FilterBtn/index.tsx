import './styles.css'

import { ValueProps, FieldProps, SelectFilter } from '../../types/types'

type FilterBtnProps = ValueProps & FieldProps & SelectFilter

export function FilterBtn(props: FilterBtnProps) {
  let value = props.value

  if (props.value === 1 && props.field === 'new') {
    value = 'New'
  } else if (props.value === 0 && props.field === 'new') {
    value = 'Used'
  } else if (props.value === 1) {
    value = 'Yes'
  } else if (props.value === 0) {
    value = 'No'
  }

  return (
    <button
      className="filter-btn"
      onClick={() => {
        props.selectFilter(props.field, props.value)
      }}
    >
      {value}
    </button>
  )
}
