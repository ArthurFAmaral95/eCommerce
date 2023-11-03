import { FilterBtn } from '../FilterBtn'
import './styles.css'

export function FilterBar() {
  return (
    <div className="filter">
      <div className="selected-filters">
        <FilterBtn/>
        <FilterBtn/>
        <FilterBtn/>
        <FilterBtn/>
      </div>
      <div className="filters">
        <span>
          Filters (1) <span className="arrow">^</span>
        </span>
      </div>
    </div>
  )
}
