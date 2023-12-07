import { CartProductProps } from '../../types/types'

import './styles.css'

type CheckoutOverviewListItemProps = {
  product: CartProductProps
}

export function CheckoutOverviewListItem(props: CheckoutOverviewListItemProps) {
  const renderConfigsList: any = []

  props.product.configs.map(config => {
    renderConfigsList.push(
      <li className="configs-list-item">
        <span className="field">{`${
          config.id === 'new' ? 'condition' : config.id
        }: `}</span>
        <span className="value">{config.value}</span>
      </li>
    )
  })

  return (
    <li className="overview-list-item">
      <span className="product-name">{props.product.product.product_name}</span>
      <ul className="configs">{renderConfigsList}</ul>
      <span className="subtotal">
        Subtotal:{' '}
        {(
          Number(props.product.configs[0].value) * props.product.product.price
        ).toFixed(2)}
      </span>
    </li>
  )
}
