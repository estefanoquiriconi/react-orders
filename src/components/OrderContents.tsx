import { ActionDispatch } from 'react'
import { formatCurrency } from '../helpers'
import type { OrderItem } from '../types'
import { OrderActions, OrderActionTypes } from '../reducers/orderReducer'

interface OrderContentsProps {
  orders: OrderItem[]
  dispatch: ActionDispatch<[action: OrderActions]>
}

export const OrderContents = ({ orders, dispatch }: OrderContentsProps) => {
  return (
    <div>
      <h2 className='font-bold text-3xl'>Consumo</h2>

      <div className='mt-6 space-y-4'>
        {orders.map((item) => (
          <div
            className='flex justify-between items-center border-t border-gray-200 py-4 last-of-type:border-b'
            key={item.id}>
            <div>
              <p className='text-lg font-medium'>
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className='font-bold'>
                Cantidad: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className='bg-red-600 h-8 w-8 rounded-full text-white font-bold hover:bg-red-700 transition duration-200 ease-in-out'
              onClick={() =>
                dispatch({
                  type: OrderActionTypes.REMOVE_ITEM,
                  payload: { id: item.id },
                })
              }>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
