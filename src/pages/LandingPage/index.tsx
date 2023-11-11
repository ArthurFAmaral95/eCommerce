import { CategoryName } from '../../components/Gallery/CategoryName'
import { Gallery } from '../../components/Gallery'

import { MainArrayProps, SelectCategory } from '../../types/types'

type LandingPageProps = MainArrayProps & SelectCategory

export function LandingPage(props: LandingPageProps) {
  window.scrollTo(0, 0)

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
        <Gallery products={productsForGallery} key={category.id} />
        <hr />
      </section>
    )
  }

  return <main id="landing-page">{renderLandingPage}</main>
}
