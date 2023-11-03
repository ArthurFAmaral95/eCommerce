import './styles.css'

import { HighlightInfoProps } from '../../types/types'

export function ProductInfo(props: HighlightInfoProps) {
  return <p id="info">{props.info}</p>
}
