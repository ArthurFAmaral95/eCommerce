import './styles.css'

import { Categories } from './Categories'
import { Login } from './Login'
import { Menu } from './Menu'

import { Search } from './Search'
import { ShoppingCart } from './ShoppingCart'

import {
  CategoriesArrayProps,
  HandleMenu,
  SelectCategory,
  HandleSearchInput,
  ListOfSearchMatchesProps,
  SelectedCategoryProps,
  HandleFormSubmit,
  SearchedTermProps,
  UpdateProductsOfPage,
  SetPages,
  SetPageNumber,
  SelectProduct,
  LoginPopUpStatus,
  HandleLoginPopUp,
  UserLoggedInProps,
  ChangeUserStatus,
  ChangeUserName,
  UserName
} from '../../types/types'
import { ListItem } from './ListItem'

type HeaderProps = CategoriesArrayProps &
  HandleMenu &
  SelectCategory &
  HandleSearchInput &
  ListOfSearchMatchesProps &
  SelectedCategoryProps &
  HandleFormSubmit &
  SearchedTermProps &
  UpdateProductsOfPage &
  SetPages &
  SetPageNumber &
  SelectProduct &
  LoginPopUpStatus &
  HandleLoginPopUp &
  UserLoggedInProps &
  ChangeUserStatus &
  ChangeUserName &
  UserName

export function Header(props: HeaderProps) {
  const renderListItens: any = []

  props.listOfSearchMatches.map(product => {
    renderListItens.push(
      <ListItem
        value={product.product_name}
        product={product}
        selectProduct={props.selectProduct}
      />
    )
  })

  return (
    <header id="header">
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
              <Login
                handleLoginPopUp={props.handleLoginPopUp}
                loginPopUpStatus={props.loginPopUpStatus}
                userLoggedIn={props.userLoggedIn}
                changeUserStatus={props.changeUserStatus}
                changeUserName={props.changeUserName}
                userName={props.userName}
              />
              <ShoppingCart />
            </div>
          </div>
          <div className="search-container">
            <Search
              handleSearchInput={props.handleSearchInput}
              selectedCategory={props.selectedCategory}
              handleFormSubmit={props.handleFormSubmit}
              searchedTerm={props.searchedTerm}
              updateProductsOfPage={props.updateProductsOfPage}
              setPages={props.setPages}
              setPageNumber={props.setPageNumber}
            />
            <ul id="search-list">{renderListItens}</ul>
          </div>
          <Categories
            categories={props.categories}
            handleMenu={props.handleMenu}
            selectCategory={props.selectCategory}
          />
        </div>
      </nav>
    </header>
  )
}
