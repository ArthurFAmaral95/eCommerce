import './styles.css'

import { HandleMenu } from '../../../types/types'

export function Menu(props: HandleMenu) {
  return (
    <div className="menu">
      <img
        src="./menu.svg"
        alt="menu"
        onClick={() => props.handleMenu(true)}
      />
    </div>
  )
}
