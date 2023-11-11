import './styles.css'

import {
  HandleSearchInput,
  SelectedCategoryProps,
  HandleFormSubmit,
  SearchedTermProps,
  UpdateProductsOfPage,
  SetPages,
  SetPageNumber
} from '../../../types/types'
import { Link } from 'react-router-dom'

type SearchProps = HandleSearchInput &
  SelectedCategoryProps &
  HandleFormSubmit &
  SearchedTermProps &
  UpdateProductsOfPage &
  SetPages &
  SetPageNumber

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
            to={
              props.searchedTerm
                ? `${props.selectedCategory}/search?search_product=${props.searchedTerm}`
                : props.selectedCategory
                ? `/${props.selectedCategory}`
                : ''
            }
            id="search-form-btn"
            onClick={() => {
              const searchList = document.querySelector('#search-list')
              const form = document.querySelector('#search-form')

              props.updateProductsOfPage()
              props.setPages()
              props.setPageNumber(1)
              ;(form as HTMLFormElement)?.reset()

              searchList?.classList.add('hidden')
            }}
          ></Link>
          <img src="./search.svg" alt="Search" typeof="submit" />
        </button>
      </form>
    </div>
  )
}
