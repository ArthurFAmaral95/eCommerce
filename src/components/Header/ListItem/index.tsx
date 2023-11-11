import './styles.css'

import { ListItemProps } from '../../../types/types'

export function ListItem(props: ListItemProps) {
  return <li>{props.value}</li>
}
