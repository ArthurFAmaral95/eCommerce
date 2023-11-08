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
  SelectCategory,
  HandleSearchInput,
  ListOfSearchMatchesProps,
  SelectedCategoryProps
} from '../../types/types'
import { ListItem } from './ListItem'

type HeaderProps = CategoriesArrayProps &
  HandleMenu &
  SelectCategory &
  HandleSearchInput &
  ListOfSearchMatchesProps &
  SelectedCategoryProps

export function Header(props: HeaderProps) {
  const renderListItens: any = []

  props.listOfSearchMatches.map(product => {
    renderListItens.push(<ListItem value={product.product_name} />)
  })

  return (
    <header>
      <nav>
        <div className="top-nav">
          <div className="flex-line">
            <div className="left-top-nav">
              <Menu handleMenu={props.handleMenu} />
              <a href="/" id="logo">
                <img src="./logo.svg" alt="logo" />
                e-Commerce
              </a>
            </div>
            <div className="right-top-nav">
              <Login />
              <ShoppingCart />
            </div>
          </div>
          <Search
            handleSearchInput={props.handleSearchInput}
            selectedCategory={props.selectedCategory}
          />
          <ul id="search-list">{renderListItens}</ul>
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
