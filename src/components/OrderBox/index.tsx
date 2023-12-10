import './styles.css'

import { Order, CartProductProps } from '../../types/types'
import { CheckoutOverviewListItem } from '../CheckoutOverviewListItem'

type OrderBoxProps = {
  order: Order
}

export function OrderBox(props: OrderBoxProps) {
  const products: CartProductProps[] = JSON.parse(props.order.products)

  const date = props.order.date_time.split(',')[0]

  const renderProducts: any = []

  products.map(product => {
    renderProducts.push(
      <CheckoutOverviewListItem key={product.orderId} product={product} />
    )
  })

  return (
    <section className="order-box">
      <header>
        <div className="left">
          <div className="date">
            <span>Date</span>
            <span>{date}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{props.order.order_total}</span>
          </div>
        </div>
        <div className="order-number">
          <span>Order Nº</span>
          <span>{props.order.order_number}</span>
        </div>
      </header>
      <div className="order-products">{renderProducts}</div>
    </section>
  )
}
