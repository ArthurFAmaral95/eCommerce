import './styles.css'

import { ClearFilters, HandleFilters } from '../../types/types'

type FilterBottomProps = ClearFilters & HandleFilters

export function FilterBottom(props: FilterBottomProps) {
  return (
    <div className="filter-bottom">
      <button id="clear-filters" onClick={() => props.clearFilters()}>
        Clear Filters
      </button>
      <button id="close-filter-menu" onClick={() => props.handleFilters(false)}>
        Close
      </button>
    </div>
  )
}
