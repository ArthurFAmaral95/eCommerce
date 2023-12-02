import './styles.css'

import { Categories } from '../Header/Categories'

import { userInfo } from '../LoginPopUp'

import {
  OpenMenu,
  CategoriesArrayProps,
  HandleMenu,
  SelectCategory,
  HandleLoginPopUp,
  LoginPopUpStatus,
  UserLoggedInProps
} from '../../types/types'

type SideBarProps = OpenMenu &
  CategoriesArrayProps &
  HandleMenu &
  SelectCategory &
  HandleLoginPopUp &
  LoginPopUpStatus &
  UserLoggedInProps

export function SideBar(props: SideBarProps) {
  return (
    <aside className={`side-bar ${props.openMenu ? '' : 'hidden'}`}>
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
          <div>
            <span>{props.userLoggedIn ? `Welcome,` : ''}</span>
            <br />
            <span>{props.userLoggedIn ? `${userInfo.userFirstName}` : ''}</span>
          </div>
          <div>
            <p>Explore</p>
            <a href="/" id="logo">
              e-Commerce
            </a>
          </div>
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
    </aside>
  )
}
