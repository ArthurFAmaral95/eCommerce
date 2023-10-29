import { PageNumber, ChoosePage, ButtonNumber } from '../../types/types'

type PageBtnProps = PageNumber & ChoosePage & ButtonNumber

export function PageBtn(props: PageBtnProps) {
  return (
    <button
      onClick={() => props.choosePage(props.buttonNumber)}
      className={props.buttonNumber === props.pageNumber ? 'current-page' : ''}
    >
      {props.buttonNumber}
    </button>
  )
}
