import './styles.css'

import { ValueProps } from '../../types/types'

export function FilterBtn(props: ValueProps) {
  return <button className="filter-btn">{props.value}</button>
}
