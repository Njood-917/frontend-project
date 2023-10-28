import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices/products/productSlice'
import categoriesReducer from './slices/products/categorySlice'
import userReducer from './slices/products/userSlice'
import orderReducer from './slices/products/orderSlice'
import cartReducer from './slices/products/cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    usersR: userReducer,
    orders: orderReducer,
    cart: cartReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
