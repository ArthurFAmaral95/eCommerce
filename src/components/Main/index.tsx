import { CategoryName } from './CategoryName'
import { ProductBox } from './ProductBox'
import './styles.css'

type ProductsProps = {
  category: string
  img_path: string
  price: number
  product_name: string
  product_id: number
}

type MainProps = {
  products: ProductsProps[]
}

export function Main(props: MainProps) {
  // const renderMain: any = []

  // console.log(props.products.length)
  return (
    <main>
      <div className="category-name-row">
        <CategoryName category={props.products[0].category} />
      </div>
      <div className="products-gallery">
        <ProductBox products={props.products[0]} />
        <ProductBox products={props.products[1]} />
        <ProductBox products={props.products[2]} />
        <ProductBox products={props.products[3]} />
      </div>
    </main>
  )
}
