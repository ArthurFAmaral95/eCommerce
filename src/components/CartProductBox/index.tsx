import './styles.css'

import { CartProductObjectProps, RemoveCartItem } from '../../types/types'

type CartProductBoxProps = CartProductObjectProps & RemoveCartItem

export function CartProductBox(props: CartProductBoxProps) {
  const renderOrderConfigListItems: any = []

  props.product.configs.map(config => {
    renderOrderConfigListItems.push(
      <li key={config.id}>
        <span className="config-id">
          {config.id === 'new' ? 'condition' : config.id}:{' '}
        </span>
        <span className="config-value">{config.value}</span>
      </li>
    )
  })

  return (
    <div className="cart-product">
      <img
        src={props.product.product.img_path}
        alt={props.product.product.product_name}
        title={props.product.product.product_name}
      />

      <div>
        <div className="cart-product-info">
          <p className="product-name">{props.product.product.product_name}</p>
          <span className="price">{`$${props.product.product.price}`}</span>
          <ul className="order-config">{renderOrderConfigListItems}</ul>
        </div>
        <button
          className="delete-cart-product"
          onClick={() => {
            props.removeCartItem(props.product.product.product_id)
          }}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
