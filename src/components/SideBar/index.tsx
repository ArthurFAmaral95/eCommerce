import './styles.css'

import { Login } from '../Header/Login'
import { Categories } from '../Header/Categories'

import {
  OpenMenu,
  CategoriesArrayProps,
  HandleMenu,
  SelectCategory
} from '../../types/types'

type SideBarProps = OpenMenu &
  CategoriesArrayProps &
  HandleMenu &
  SelectCategory

export function SideBar(props: SideBarProps) {
  return (
    <div className={`side-bar ${props.openMenu ? '' : 'hidden'}`}>
      <div className="close">
        <img
          src="./close-menu.svg"
          alt="close menu icon"
          id="close-menu"
          onClick={() => props.handleMenu(false)}
        />
      </div>
      <div className="content">
        <div className="blue-bg">
          <Login />
          <p>Explore</p>
          <a href="/" id="logo">
            e-Commerce
          </a>
        </div>
        <div className="white-bg">
          <a href="/" id="home">
            Homepage
            <img src="./home.svg" alt="" />
          </a>
          <hr />
          <p>Categories</p>
          <Categories
            categories={props.categories}
            handleMenu={props.handleMenu}
            selectCategory={props.selectCategory}
          />
          <hr />
        </div>
      </div>
    </div>
  )
}
