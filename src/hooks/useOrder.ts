import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    const itemExists = order.find(orderItem => orderItem.id === item.id)

    if (itemExists) {
      const updatedOrder = order.map(orderItem => {
        if (orderItem.id === item.id) {
          orderItem.quantity++
        }
        return orderItem
      })
      setOrder(updatedOrder)
    } else {
      const newItem = { ...item, quantity: 1 }
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: OrderItem['id']) => {
    setOrder(order.filter(item => item.id !== id))
  }

  return {
    addItem,
    order,
    removeItem,
  }
}
