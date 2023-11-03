import './styles.css'

import { FieldProps } from '../../types/types'

export function FilterField(props: FieldProps) {
  return <h3 className="filter-field">{props.field}</h3>
}
