import './styles.css'

import { HandleSearchInput } from '../../../types/types'

export function Search(props: HandleSearchInput) {
  return (
    <div className="search">
      <form action="" method="get">
        <input
          type="text"
          id="search-product"
          name="search-product"
          placeholder="Search product"
          onChange={e => {
            props.handleSearchInput(e.target.value)
          }}
        />
        <button>
          <img src="./search.svg" alt="Search" />
        </button>
      </form>
    </div>
  )
}
