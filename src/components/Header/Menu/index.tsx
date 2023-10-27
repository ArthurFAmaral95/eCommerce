import './styles.css'

import { HandleMenu } from '../../../types/types'

export function Menu(props: HandleMenu) {
  return (
    <div className="menu">
      <img
        src="../../../public/menu.svg"
        alt="menu"
        onClick={props.handleMenu}
      />
    </div>
  )
}
