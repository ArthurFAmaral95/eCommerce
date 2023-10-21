import { Login } from './Login'
import { Menu } from './Menu'
import { Place } from './Place'
import { Search } from './Search'
import { ShoppingCart } from './ShoppingCart'

import './styles.css'

export function Header() {
  return (
    <header>
      <nav>
        <div className="top-nav">
          <div className='flex-line'>
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
        </div>
        <div className="botton-nav">
          <Place />
        </div>
      </nav>
    </header>
  )
}
