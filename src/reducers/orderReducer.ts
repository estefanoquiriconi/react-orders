import { MenuItem, OrderItem } from "../types"

export enum OrderActionTypes {
    ADD_ITEM = 'ADD_ITEM',
    REMOVE_ITEM = 'REMOVE_ITEM',
    PLACE_ORDER = 'PLACE_ORDER',
    ADD_TIP = 'ADD_TIP'
}

export type OrderActions =
    | { type: OrderActionTypes.ADD_ITEM, payload: { item: MenuItem } }
    | { type: OrderActionTypes.REMOVE_ITEM, payload: { id: MenuItem['id'] } }
    | { type: OrderActionTypes.PLACE_ORDER }
    | { type: OrderActionTypes.ADD_TIP, payload: { value: number } }

export type OrderState = {
    orders: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    orders: [],
    tip: 0
}

const addItem = (orders: OrderItem[], newOrder: MenuItem): OrderItem[] => {
    const existingOrder = orders.find(order => order.id === newOrder.id);

    if (!existingOrder) return [...orders, { ...newOrder, quantity: 1 }]

    return orders.map((order) =>
        order.id === existingOrder.id
            ? { ...order, quantity: order.quantity + 1 }
            : order,
    )

}

const removeItem = (orders: OrderItem[], id: MenuItem['id']): OrderItem[] => {
    return orders.filter(order => order.id !== id)
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    switch (action.type) {
        case OrderActionTypes.ADD_ITEM:
            return {
                ...state,
                orders: addItem(state.orders, action.payload.item)
            }

        case OrderActionTypes.REMOVE_ITEM:
            return {
                ...state,
                orders: removeItem(state.orders, action.payload.id)
            }

        case OrderActionTypes.PLACE_ORDER:
            return {
                orders: [],
                tip: 0
            }

        case OrderActionTypes.ADD_TIP:
            return {
                ...state,
                tip: action.payload.value
            }
        default:
            return state
    }
}