import './styles.css'

import { CategoryName } from '../../components/Gallery/CategoryName'
import { Gallery } from '../../components/Gallery'

import { MainArrayProps } from '../../types/types'

export function LandingPage(props: MainArrayProps) {
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
      <div className="category">
        <div className="category-name-row">
          <CategoryName category={category.category} key={category.id} />
        </div>
        <Gallery products={productsForGallery} key={category.id} />
        <hr />
      </div>
    )
  }

  return <main>{renderLandingPage}</main>
}
