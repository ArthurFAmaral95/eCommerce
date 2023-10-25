import './styles.css'

type Menu = {
  onClick: () => void
}

export function Menu(props: Menu) {
  return (
    <div className="menu">
      <img src="../../../public/menu.svg" alt="menu" onClick={props.onClick} />
    </div>
  )
}
