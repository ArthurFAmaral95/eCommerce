import { Login } from '../Header/Login'
import { Categories } from '../Header/Categories'
import { Header } from '../Header'

import './styles.css'

type SideBar = {
  openMenu: boolean
}

type SideBarProps = SideBar & Header

export function SideBar(props: SideBarProps) {
  return (
    <div className={`side-bar ${props.openMenu ? '' : 'hidden'}`}>
      <div className="close">
        <img
          src="../../../public/close-menu.svg"
          alt="close menu icon"
          id="close-menu"
          onClick={props.handleMenu}
        />
      </div>
      <div className="content">
        <div className="blue-bg">
          <Login />
          <p>Explore</p>
          <a href="/" id="logo">
            E-Commerce
          </a>
        </div>
        <div className="white-bg">
          <a href="/" id="home">
            Homepage
            <img src="../../../public/home.svg" alt="" />
          </a>
          <hr />
          <p>Categories</p>
          <Categories categories={props.categories} />
          <hr />
        </div>
      </div>
    </div>
  )
}