import { PageNumber, ChoosePage, ButtonNumber } from '../../types/types'

type PageBtnProps = PageNumber & ChoosePage & ButtonNumber

export function PageBtn(props: PageBtnProps) {
  return (
    <button
      onClick={() => {
        if (props.buttonNumber === 999) {
          return
        } else {
          props.choosePage(props.buttonNumber)
        }
      }}
      className={props.buttonNumber === props.pageNumber ? 'current-page' : ''}
    >
      {props.buttonNumber === 999 ? '...' : props.buttonNumber}
    </button>
  )
}
