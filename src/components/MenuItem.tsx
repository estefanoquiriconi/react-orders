import { ActionDispatch } from 'react'
import type { MenuItem as MenuItemType } from '../types'
import { OrderActions, OrderActionTypes } from '../reducers/orderReducer'

interface MenuItemProps {
  item: MenuItemType
  dispatch: ActionDispatch<[action: OrderActions]>
}

export const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className='border-2 border-teal-400 hover:bg-teal-200 transition duration-200 ease-in-out w-full p-4 flex justify-between rounded-lg shadow-sm'
      onClick={() =>
        dispatch({ type: OrderActionTypes.ADD_ITEM, payload: { item } })
      }>
      <p className='text-lg font-medium'>{item.name}</p>
      <p className='font-bold text-lg'>${item.price.toFixed(2)}</p>
    </button>
  )
}
