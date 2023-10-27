export type CategoriesProps = {
  category: string
  id: number
}

export type CategoryProps = {
  category: string
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

export type ProductObjectProps = {
  product: {
    category: string
    img_path: string
    price: number
    product_name: string
    product_id: number
  }
}

export type MainProps = {
  products: ProductsProps[]
  categories: CategoriesProps[]
}

export type OpenMenu = {
  openMenu: boolean
}

export type HandleMenu = {
  handleMenu: (boolean: boolean) => void
}
