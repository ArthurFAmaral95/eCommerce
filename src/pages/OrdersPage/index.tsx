import './styles.css'

import { UserName, Order } from '../../types/types'
import { useState, useEffect } from 'react'

import axios from 'axios'
import { OrderBox } from '../../components/OrderBox'

type OrdersPageProps = UserName

export function OrdersPage(props: OrdersPageProps) {
  const userId = JSON.parse(localStorage.getItem('user') || 'false').userId
  const [userOrders, setUserOrders] = useState<Order[]>([])

  useEffect(() => {
    fetchOrders()
  }, [])

  function fetchOrders() {
    axios
      .get(`http://localhost:4001/orders/${userId}`)
      .then(response => {
        setUserOrders(response.data)
      })
      .catch(err => console.error(err))
  }

  const renderOrders: any = []

  userOrders.map(order => {
    renderOrders.push(<OrderBox key={order.order_number} order={order} />)
  })

  return (
    <main id="orders-page">
      <h2>Hello, {props.userName}</h2>
      <h3>Your orders</h3>
      <div className="orders">{renderOrders}</div>
    </main>
  )
}
