import { AddressFormProps } from '../components/AddressForm'

import { PaymentFormProps } from '../components/PaymentForm'

export type CategoriesProps = {
  category: string
  id: number
}

export type CategoryProps = {
  category: string
}

export type SelectedCategoryProps = {
  selectedCategory: string
}

export type CategoriesArrayProps = {
  categories: CategoriesProps[]
}

export type ProductsProps = {
  category: string
  img_path: string
  price: number
  product_name: string
  product_id: number
}

export type ProductProps = {
  product: ProductsProps
}

export type ProductsArrayProps = {
  products: ProductsProps[]
}

export type ListOfSearchMatchesProps = {
  listOfSearchMatches: ProductsProps[]
}

export type ProductsOfPageArrayProps = {
  productsOfPage: ProductsProps[]
}

export type ProductsInfoProps = {
  item_id: number
  brand: string
  type: string
  gender: string
  author: string
  best_sellet: number
  publisher: string
  seller: string
  new: number
  size: any
  color: string
  department: string
  in_stock: number
  storage: number
  age: string
}

export type Item = { [item: string]: string | number }

export type CardType = { [type: string]: string }

export type ProductsInfoArrayProps = {
  productsInfo: ProductsInfoProps[]
}

export type ProductInfoArrayProps = {
  productInfo: ProductsInfoProps[]
}

export type ProductInfoObjectProps = {
  productInfo: {
    item_id: number
    brand: string
    type: string
    gender: string
    author: string
    best_sellet: number
    publisher: string
    seller: string
    new: number
    size: string | number
    color: string
    department: string
    in_stock: number
    storage: number
    age: string
  }
}

export type ProductObjectProps = {
  product: {
    category: string
    img_path: string
    price: number
    product_name: string
    product_id: number
  }
}

export type HighlightInfoProps = {
  info: string
}

export type MainArrayProps = {
  products: ProductsProps[]
  categories: CategoriesProps[]
}

export type ConfigProps = {
  id: string
  value: string
}

export type OpenMenu = {
  openMenu: boolean
}

export type OpenFilters = {
  openFilters: boolean
}

export type NumberOfPages = {
  numberOfPages: number
}

export type PageNumber = {
  pageNumber: number
}

export type ButtonNumber = {
  buttonNumber: number
}

export type FieldProps = {
  field: string
}

export type ValueProps = {
  value: any
}

export type SelectedFiltersProps = {
  field: string
  value: number | string | any
}

export type SelectedFiltersArrayProps = {
  selectedFilters: SelectedFiltersProps[]
}

export type CondensededFilters = {
  field: string
  values: string | number[]
}

export type ListItemProps = {
  value: string
}

export type SearchedTermProps = {
  searchedTerm: string
}

export type SelectInputAndOptionsProps = {
  selectId: string
  values: string[]
}

export type OrderConfiguration = {
  field: string
  value: string
}

export type CartProductProps = {
  configs: ConfigProps[]
  product: ProductsProps
  orderId: number
}

export type CartProductArrayProps = {
  cartProducts: CartProductProps[]
}

export type CartProductObjectProps = {
  product: {
    configs: ConfigProps[]
    product: ProductsProps
    orderId: number
  }
}

export type Total = {
  total: number
}

export type LoginPopUpStatus = {
  loginPopUpStatus: boolean
}

export type UserName = {
  userName: string
}

export type Order = {
  order_number: number
  products: string
  order_total: number
  shipping_address: string
  date_time: string
}

export type FetchAllProducts = {
  fetchAllProducts: () => void
}

export type UserLoggedInProps = {
  userLoggedIn: boolean
}

export type HandleMenu = {
  handleMenu: (boolean: boolean) => void
}

export type HandleFilters = {
  handleFilters: (boolean: boolean) => void
}

export type SelectCategory = {
  selectCategory: (category: string) => void
}

export type PreviousPage = {
  previousPage: () => void
}

export type NextPage = {
  nextPage: () => void
}

export type ChoosePage = {
  choosePage: (number: number) => void
}

export type SelectFilter = {
  selectFilter: (field: string, value: string | number) => void
}

export type ClearFilters = {
  clearFilters: () => void
}

export type HandleSearchInput = {
  handleSearchInput: (string: string) => void
}

export type HandleFormSubmit = {
  handleFormSubmit: () => void
}

export type UpdateProductsOfPage = {
  updateProductsOfPage: () => void
}

export type SetPages = {
  setPages: () => void
}

export type SetPageNumber = {
  setPageNumber: (number: number) => void
}

export type SelectProduct = {
  selectProduct: (productID: number, category: string) => void
}

export type ShowAddToCartpopUp = {
  showAddToCartpopUp: () => void
}

export type RemoveCartItem = {
  removeCartItem: (ide: number) => void
}

export type AddToCart = {
  addToCart: (product: ProductsProps) => void
}

export type SetBuyNow = {
  setBuyNow: (product: ProductsProps) => void
}

export type HandleLoginPopUp = {
  handleLoginPopUp: () => void
}

export type ChangeUserStatus = {
  changeUserStatus: () => void
}

export type ChangeUserName = {
  changeUserName: (user: string) => void
}

export type GetAddressData = {
  getAddressData: (address: AddressFormProps) => void
}

export type GetPaymentData = {
  getPaymentData: (payment: PaymentFormProps) => void
}

export type EmptyCart = {
  emptyCart: () => void
}

export type ClearBuyNow = {
  clearBuyNow: () => void
}
