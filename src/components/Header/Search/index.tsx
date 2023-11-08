import './styles.css'

import { HandleSearchInput, SelectedCategoryProps } from '../../../types/types'

type SearchProps = HandleSearchInput & SelectedCategoryProps

export function Search(props: SearchProps) {
  return (
    <div className="search">
      <form action="/search" method="get">
        <input
          type="text"
          id="search-product"
          name="search-product"
          placeholder={
            props.selectedCategory
              ? `Search in ${props.selectedCategory}`
              : 'Search in e-Commerce'
          }
          onChange={e => {
            props.handleSearchInput(e.target.value)
          }}
        />
        <button>
          <img src="./search.svg" alt="Search" typeof="submit" />
        </button>
      </form>
    </div>
  )
}
