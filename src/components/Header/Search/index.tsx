import './styles.css'

import {
  HandleSearchInput,
  SelectedCategoryProps,
  HandleFormSubmit,
  SearchedTermProps
} from '../../../types/types'
import { Link } from 'react-router-dom'

type SearchProps = HandleSearchInput &
  SelectedCategoryProps &
  HandleFormSubmit &
  SearchedTermProps

export function Search(props: SearchProps) {
  return (
    <div className="search">
      <form
        id="search-form"
        onSubmit={e => {
          e.preventDefault()
          props.handleFormSubmit()
        }}
      >
        <label htmlFor="search-product"></label>
        <input
          type="text"
          id="search-product"
          name="search_product"
          placeholder={
            props.selectedCategory
              ? `Search in ${props.selectedCategory}`
              : 'Search in e-Commerce'
          }
          required
          onChange={e => {
            props.handleSearchInput(e.target.value)
          }}
        />
        <button>
          <Link
            to={`${props.selectedCategory}/search?search_product=${props.searchedTerm}`}
            id="search-form-btn"
          >
            <img src="./search.svg" alt="Search" typeof="submit" />
          </Link>
        </button>
      </form>
    </div>
  )
}
