import './styles.css'

import { SelectInputAndOptionsProps } from '../../types/types'

type SelectInputProps = SelectInputAndOptionsProps

export function SelectInput(props: SelectInputProps) {
  const renderOptions: any = []

  props.values.map(value => {
    renderOptions.push(
      <option value={value} key={value}>
        {value}
      </option>
    )
  })

  return (
    <>
      <label htmlFor={props.selectId}>
        {props.selectId === 'new' ? 'Condition' : props.selectId}
      </label>
      <select name={props.selectId} id={props.selectId}>
        {renderOptions}
      </select>
    </>
  )
}
