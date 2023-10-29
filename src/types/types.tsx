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

export type productsOfPageArrayProps = {
  productsOfPage: ProductsProps[]
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
