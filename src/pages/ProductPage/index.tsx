import { AddToCartPopUp } from '../../components/AddToCartPopUp'
import { Product } from '../../components/Product'
import {
  ProductProps,
  ProductInfoArrayProps,
  AddToCart
} from '../../types/types'

type ProductPageProps = ProductInfoArrayProps & ProductProps & AddToCart

export function ProductPage(props: ProductPageProps) {
  window.scrollTo(0, 0)

  function showAddToCartPopUp() {
    const popUp = document.querySelector('.pop-up')
    popUp?.classList.remove('hidden')
  }
  return (
    <>
      <main id="product-page">
        <Product
          product={props.product}
          productInfo={props.productInfo}
          showAddToCartpopUp={showAddToCartPopUp}
          addToCart={props.addToCart}
        />
      </main>
      <AddToCartPopUp product={props.product} />
    </>
  )
}
