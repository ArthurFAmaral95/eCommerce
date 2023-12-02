import { CategoryName } from '../../components/Gallery/CategoryName'
import { Gallery } from '../../components/Gallery'

import {
  MainArrayProps,
  SelectCategory,
  SelectProduct,
  FetchAllProducts
} from '../../types/types'
import { useEffect } from 'react'

type LandingPageProps = MainArrayProps &
  SelectCategory &
  SelectProduct &
  FetchAllProducts

export function LandingPage(props: LandingPageProps) {
  useEffect(() => {
    props.fetchAllProducts()
  }, [])

  const renderLandingPage = []

  for (const category of props.categories) {
    const productsForGallery = []
    let i = 0
    for (const product of props.products) {
      if (i >= 4) {
        break
      }
      if (product.category !== category.category) {
        continue
      }
      productsForGallery.push(product)
      i++
    }

    renderLandingPage.push(
      <section className="category">
        <div className="category-name-row">
          <CategoryName
            category={category.category}
            key={category.category}
            selectCategory={props.selectCategory}
          />
        </div>
        <Gallery
          products={productsForGallery}
          key={category.id}
          selectProduct={props.selectProduct}
        />
        <hr />
      </section>
    )
  }

  return <main id="landing-page">{renderLandingPage}</main>
}
