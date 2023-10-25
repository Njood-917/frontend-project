import { createSlice } from '@reduxjs/toolkit'

export type Order = {
  id: number
  productId: number
  userId: number
  purchasedAt: string
}
export type OrderState = {
  orders: Order[]
  error: null | string
  isLoading: boolean
}
const initialState: OrderState = {
  orders: [],
  error: null,
  isLoading: false
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    ordersRequest: (state) => {
      state.isLoading = true
    },
    ordersSuccess: (state, action) => {
      state.isLoading = false
      state.orders = action.payload
    }
  }
})

export const { ordersRequest, ordersSuccess } = orderSlice.actions
export default orderSlice.reducer
