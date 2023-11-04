import './styles.css'

import { FilterBottom } from '../FilterBottom'

import {
  SelectedCategoryProps,
  ProductsInfoArrayProps,
  SelectFilter
} from '../../types/types'
import { FilterField } from '../FilterField'
import { FilterBtn } from '../FilterBtn'
import { Key } from 'react'

type FilterMenuProps = SelectedCategoryProps &
  ProductsInfoArrayProps &
  SelectFilter

export function FilterMenu(props: FilterMenuProps) {
  const uniqueFilterFields: any = []
  const renderFilterMenu: any = []

  for (const field in props.productsInfo[0]) {
    if (field === 'item_id') {
      continue
    }
    uniqueFilterFields.push(field)
  }

  for (const unique of uniqueFilterFields) {
    const fieldValues: any = []
    const renderFieldValues: any = []

    for (const item of props.productsInfo) {
      for (const fieldValue in item) {
        if (fieldValues.includes(item[fieldValue]) || fieldValue !== unique) {
          continue
        }
        fieldValues.push(item[fieldValue])
      }
    }

    fieldValues.sort().map((value: Key | null | undefined) => {
      renderFieldValues.push(
        <FilterBtn
          value={value}
          key={unique + value}
          field={unique}
          selectFilter={props.selectFilter}
        />
      )
    })

    renderFilterMenu.push(
      <>
        <FilterField field={unique} key={unique} />
        <div className="field-values">{renderFieldValues}</div>
      </>
    )
  }

  return (
    <div className="filter-menu ">
      <h2>{props.selectedCategory}</h2>
      <div className="filter-content">{renderFilterMenu}</div>
      <FilterBottom />
    </div>
  )
}
