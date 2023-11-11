import './styles.css'

import { FilterBtn } from '../FilterBtn'

import {
  SelectedFiltersArrayProps,
  SelectFilter,
  HandleFilters
} from '../../types/types'

type FilterBarProps = SelectFilter & SelectedFiltersArrayProps & HandleFilters

export function FilterBar(props: FilterBarProps) {
  const uniqueFilterFields: string[] = []

  props.selectedFilters.map(filter => {
    if (!uniqueFilterFields.includes(filter.field)) {
      uniqueFilterFields.push(filter.field)
    }
  })

  const renderSelectedFilters: any = []
  uniqueFilterFields.forEach(field => {
    const filterBtns: any = []
    props.selectedFilters.map(filter => {
      if (filter.field === field) {
        filterBtns.push(
          <FilterBtn
            field={filter.field}
            value={filter.value}
            selectFilter={props.selectFilter}
            key={filter.field + '-' + filter.value}
            selectedFilters={props.selectedFilters}
          />
        )
      }
    })

    renderSelectedFilters.push(
      <div className="filter-container" key={field + ':'}>
        <span className="field-name">
          {field === 'new'
            ? 'Condition'
            : field === 'in_stock'
            ? 'In Stock'
            : field === 'best_seller'
            ? 'Bestseller'
            : field}
          :
        </span>
        {filterBtns}
      </div>
    )
  })

  return (
    <div className="filter">
      <div className="selected-filters">{renderSelectedFilters}</div>
      <div className="filters" onClick={() => props.handleFilters(true)}>
        <span>
          Filters ({props.selectedFilters.length})
          <span className="arrow">^</span>
        </span>
      </div>
    </div>
  )
}
