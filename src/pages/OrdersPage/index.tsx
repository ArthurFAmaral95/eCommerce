import { UserName, Order } from '../../types/types'
import { useState, useEffect } from 'react'

import axios from 'axios'

type OrdersPageProps = UserName

export function OrdersPage(props: OrdersPageProps) {
  const userId = JSON.parse(localStorage.getItem('user') || 'false').userId
  const [userOrders, setUserOrders] = useState<Order[]>([])

  useEffect(() => {
    fetchOrders()
  }, [])

  console.log({ userId, userOrders })

  function fetchOrders() {
    axios
      .get(`http://localhost:4001/orders/${userId}`)
      .then(response => {
        setUserOrders(response.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <main id="orders-page">
      <h2>Hello, {props.userName}</h2>
      <h3>Your orders</h3>
    </main>
  )
}
