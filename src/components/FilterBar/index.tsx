import './styles.css'

import { FilterBtn } from '../FilterBtn'

import { SelectedFiltersArrayProps, SelectFilter } from '../../types/types'

type FilterBarProps = SelectFilter & SelectedFiltersArrayProps

export function FilterBar(props: FilterBarProps) {
  const renderBtns: any = []

  props.selectedFilters.map(filter => {
    renderBtns.push(
      <FilterBtn
        field={filter.field}
        value={filter.value}
        selectFilter={props.selectFilter}
        key={filter.field + '-' + filter.value}
        selectedFilters={props.selectedFilters}
      />
    )
  })

  return (
    <div className="filter">
      <div className="selected-filters">{renderBtns}</div>
      <div className="filters">
        <span>
          Filters ({props.selectedFilters.length}){' '}
          <span className="arrow">^</span>
        </span>
      </div>
    </div>
  )
}
