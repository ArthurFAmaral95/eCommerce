import { Routes, Route } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'
import { CategoryPage } from './pages/CategoryPage'
import { SearchResultPage } from './pages/SearchResultPage'
import { ProductPage } from './pages/ProductPage'
import { CartPage } from './pages/CartPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { CheckoutPage } from './pages/CheckoutPage'

import {
  MainArrayProps,
  SelectedCategoryProps,
  SelectCategory,
  ProductsOfPageArrayProps,
  PreviousPage,
  NextPage,
  ChoosePage,
  NumberOfPages,
  PageNumber,
  ProductsInfoArrayProps,
  SelectFilter,
  ClearFilters,
  SelectedFiltersArrayProps,
  HandleFilters,
  OpenFilters,
  SelectProduct,
  ProductProps,
  ProductInfoArrayProps,
  CartProductArrayProps,
  AddToCart,
  RemoveCartItem,
  Total,
  FetchAllProducts,
  ChangeUserStatus,
  UserLoggedInProps,
  ChangeUserName,
  EmptyCart,
  SetBuyNow,
  ClearBuyNow,
  UserName
} from './types/types'
import { BuyNowCheckoutPage } from './pages/BuyNowCheckoutPage'
import { OrdersPage } from './pages/OrdersPage'

type MainProps = MainArrayProps &
  SelectedCategoryProps &
  SelectCategory &
  ProductsOfPageArrayProps &
  PreviousPage &
  NextPage &
  ChoosePage &
  NumberOfPages &
  PageNumber &
  ProductsInfoArrayProps &
  SelectFilter &
  ClearFilters &
  SelectedFiltersArrayProps &
  HandleFilters &
  OpenFilters &
  SelectProduct &
  ProductProps &
  ProductInfoArrayProps &
  CartProductArrayProps &
  RemoveCartItem &
  Total &
  AddToCart &
  FetchAllProducts &
  ChangeUserStatus &
  UserLoggedInProps &
  ChangeUserName &
  EmptyCart &
  SetBuyNow &
  ClearBuyNow &
  UserName

export function Main(props: MainProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            fetchAllProducts={props.fetchAllProducts}
            categories={props.categories}
            products={props.products}
            selectCategory={props.selectCategory}
            selectProduct={props.selectProduct}
          />
        }
      />
      <Route
        path={`/${props.selectedCategory}`}
        element={
          <CategoryPage
            selectedCategory={props.selectedCategory}
            productsOfPage={props.productsOfPage}
            productsInfo={props.productsInfo}
            previousPage={props.previousPage}
            nextPage={props.nextPage}
            choosePage={props.choosePage}
            numberOfPages={props.numberOfPages}
            pageNumber={props.pageNumber}
            selectFilter={props.selectFilter}
            clearFilters={props.clearFilters}
            selectedFilters={props.selectedFilters}
            handleFilters={props.handleFilters}
            openFilters={props.openFilters}
            selectProduct={props.selectProduct}
          />
        }
      />
      <Route
        path={`/${props.selectedCategory}/search`}
        element={
          <SearchResultPage
            selectedCategory={props.selectedCategory}
            productsOfPage={props.productsOfPage}
            productsInfo={props.productsInfo}
            previousPage={props.previousPage}
            nextPage={props.nextPage}
            choosePage={props.choosePage}
            numberOfPages={props.numberOfPages}
            pageNumber={props.pageNumber}
            selectProduct={props.selectProduct}
          />
        }
      />
      <Route
        path={`/product/${props.product.product_id}`}
        element={
          <ProductPage
            product={props.product}
            productInfo={props.productInfo}
            addToCart={props.addToCart}
            setBuyNow={props.setBuyNow}
          />
        }
      />
      <Route
        path={`/cart`}
        element={
          <CartPage
            cartProducts={props.cartProducts}
            removeCartItem={props.removeCartItem}
            total={props.total}
          />
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage
            changeUserStatus={props.changeUserStatus}
            userLoggedIn={props.userLoggedIn}
            changeUserName={props.changeUserName}
          />
        }
      />
      <Route
        path="/register"
        element={
          <RegisterPage
            changeUserStatus={props.changeUserStatus}
            userLoggedIn={props.userLoggedIn}
            changeUserName={props.changeUserName}
          />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage
            cartProducts={props.cartProducts}
            total={props.total}
            userLoggedIn={props.userLoggedIn}
            emptyCart={props.emptyCart}
          />
        }
      />
      <Route
        path="/buynowcheckout"
        element={
          <BuyNowCheckoutPage
            userLoggedIn={props.userLoggedIn}
            clearBuyNow={props.clearBuyNow}
          />
        }
      />
      <Route
        path="/orders"
        element={<OrdersPage userName={props.userName} />}
      />
    </Routes>
  )
}
