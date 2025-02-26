import type { ActionDispatch } from 'react'
import { OrderActions, OrderActionTypes } from '../reducers/orderReducer'

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%',
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%',
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%',
  },
]

interface TipPercentageFormProps {
  tip: number
  dispatch: ActionDispatch<[action: OrderActions]>
}

export const TipPercentageForm = ({
  tip,
  dispatch,
}: TipPercentageFormProps) => {
  return (
    <>
      <h3 className='font-bold text-3xl'> Propina </h3>

      <form action=''>
        {tipOptions.map((tipOption) => (
          <div
            key={tipOption.id}
            className='flex items-center gap-4'>
            <input
              id={tipOption.id}
              type='radio'
              name='tip'
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: OrderActionTypes.ADD_TIP,
                  payload: { value: +e.target.value },
                })
              }
              checked={tipOption.value === tip}
              className='h-4 w-4 text-teal-600 border-gray-300 focus:ring-teal-500'
            />
            <label
              htmlFor={tipOption.id}
              className='text-lg'>
              {tipOption.label}
            </label>
          </div>
        ))}
      </form>
    </>
  )
}
