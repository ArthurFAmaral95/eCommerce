import './styles.css'

import { ClearFilters } from '../../types/types'

export function FilterBottom(props: ClearFilters) {
  return (
    <div className="filter-bottom">
      <button id="clear-filters" onClick={() => props.clearFilters()}>
        Clear Filters
      </button>
      <button id="close-filter-menu">Close</button>
    </div>
  )
}
