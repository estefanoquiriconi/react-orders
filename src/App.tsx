import { useReducer } from 'react'
import { MenuItem } from './components/MenuItem'
import { OrderContents } from './components/OrderContents'
import { OrderTotal } from './components/OrderTotal'
import { TipPercentageForm } from './components/TipPercentageForm'
import { menuItems } from './data/db'
import { initialState, orderReducer } from './reducers/orderReducer'

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className='bg-teal-500 py-6 shadow-md'>
        <h1 className='text-center text-5xl font-extrabold text-white'>
          Calculadora de Propinas y Consumos
        </h1>
      </header>

      <main className='max-w-5xl mx-auto py-10 grid md:grid-cols-2 gap-6'>
        <div className='p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-3xl font-bold'>Menú</h2>

          <div className='mt-6 space-y-4'>
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className='border border-gray-300 p-6 rounded-lg shadow-lg bg-white space-y-6'>
          {state.orders.length ? (
            <>
              <OrderContents
                orders={state.orders}
                dispatch={dispatch}
              />

              <TipPercentageForm
                tip={state.tip}
                dispatch={dispatch}
              />

              <OrderTotal
                orders={state.orders}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className='text-center text-gray-500'>La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
