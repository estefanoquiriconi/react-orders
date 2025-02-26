import { ActionDispatch, useMemo } from 'react'
import { formatCurrency } from '../helpers'
import type { OrderItem } from '../types'
import { OrderActions, OrderActionTypes } from '../reducers/orderReducer'

interface OrderTotalProps {
  orders: OrderItem[]
  tip: number
  dispatch: ActionDispatch<[action: OrderActions]>
}

export const OrderTotal = ({ orders, tip, dispatch }: OrderTotalProps) => {
  const subTotalAmount = useMemo(
    () => orders.reduce((total, item) => total + item.price * item.quantity, 0),
    [orders],
  )

  const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip])

  const totalAmount = useMemo(
    () => subTotalAmount + tipAmount,
    [subTotalAmount, tipAmount],
  )

  return (
    <>
      <div className='space-y-3'>
        <h2 className='font-bold text-3xl'>Totales y Propina:</h2>
        <p className='text-lg'>
          Subtotal a pagar: {''}
          <span className='font-bold text-teal-900'>
            {formatCurrency(subTotalAmount)}
          </span>
        </p>
        <p className='text-lg'>
          Propina: {''}
          <span className='font-bold text-teal-900'>
            {formatCurrency(tipAmount)}
          </span>
        </p>
        <p className='text-lg'>
          Total a pagar: {''}
          <span className='font-bold text-teal-900'>
            {formatCurrency(totalAmount)}
          </span>
        </p>
      </div>
      <button
        className='w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-20'
        disabled={totalAmount === 0}
        onClick={() => dispatch({ type: OrderActionTypes.PLACE_ORDER })}>
        Guardar Orden
      </button>
    </>
  )
}
