import './styles.css'

import { Categories } from './Categories'
import { Login } from './Login'
import { Menu } from './Menu'
import { Place } from './Place'
import { Search } from './Search'
import { ShoppingCart } from './ShoppingCart'

import {
  CategoriesArrayProps,
  HandleMenu,
  SelectCategory
} from '../../types/types'

type HeaderProps = CategoriesArrayProps & HandleMenu & SelectCategory

export function Header(props: HeaderProps) {
  return (
    <header>
      <nav>
        <div className="top-nav">
          <div className="flex-line">
            <div className="left-top-nav">
              <Menu handleMenu={props.handleMenu} />
              <a href="/" id="logo">
                <img src="../../../public/logo.svg" alt="logo" />
                E-Commerce
              </a>
            </div>
            <div className="right-top-nav">
              <Login />
              <ShoppingCart />
            </div>
          </div>
          <Search />
          <Categories
            categories={props.categories}
            handleMenu={props.handleMenu}
            selectCategory={props.selectCategory}
          />
        </div>
        <div className="botton-nav">
          <Place />
        </div>
      </nav>
    </header>
  )
}
