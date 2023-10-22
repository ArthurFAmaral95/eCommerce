import { Categories } from './Categories'
import { Login } from './Login'
import { Menu } from './Menu'
import { Place } from './Place'
import { Search } from './Search'
import { ShoppingCart } from './ShoppingCart'

import './styles.css'

export type CategoriesProps = {
  category: string
  id: number
}

export type HeaderProps = {
  categories: CategoriesProps[]
}

export function Header(props: HeaderProps) {
  return (
    <header>
      <nav>
        <div className="top-nav">
          <div className="flex-line">
            <div className="left-top-nav">
              <Menu />
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
          <Categories categories={props.categories} />
        </div>
        <div className="botton-nav">
          <Place />
        </div>
      </nav>
    </header>
  )
}
