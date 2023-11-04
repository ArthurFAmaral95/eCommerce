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

export type ProductsArrayProps = {
  products: ProductsProps[]
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

export type ProductsInfoArrayProps = {
  productsInfo: ProductsInfoProps[]
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

export type OpenMenu = {
  openMenu: boolean
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
  value: string | number
}

export type HandleMenu = {
  handleMenu: (boolean: boolean) => void
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
