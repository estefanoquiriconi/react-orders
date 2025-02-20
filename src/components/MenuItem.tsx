import { MenuItem as MenuItemType } from '../types'

interface MenuItemProps {
  item: MenuItemType
  addItem: (item: MenuItemType) => void
}

export const MenuItem = ({ item, addItem }: MenuItemProps) => {
  return (
    <button
      className='border-2 hover:bg-teal-200 border-teal-400 w-full p-3 flex justify-between'
      onClick={() => addItem(item)}>
      <p>{item.name}</p>
      <p className='font-black'>${item.price}</p>
    </button>
  )
}
