import { createSlice } from '@reduxjs/toolkit'

export type Product = {
  id: number
  name: string
  image: string
  description: string
  categories: number[]
  variants: string[]
  sizes: string[]
  categoryId: null | number //maybe change later
}

export type ProductState = {
  products: Product[]
  error: null | string
  isLoading: boolean
  selectedProduct: Product | null
}

const initialState: ProductState = {
  products: [],
  error: null,
  isLoading: false,
  selectedProduct: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    productsRequest: (state) => {
      state.isLoading = true
    },
    productsSuccess: (state, action) => {
      state.isLoading = false
      state.products = action.payload
    },
    addProduct: (state, action: { payload: { product: Product } }) => {
      state.products = [action.payload.product, ...state.products]
    },
    removeProduct: (state, action: { payload: { productId: number } }) => {
      const filteredItems = state.products.filter(
        (product) => product.id !== action.payload.productId
      )
      state.products = filteredItems
    },
    // editProduct: (state, action) => {
    // const { productId, newData } = action.payload
    // const productIndex = state.products.findIndex((product) => product.id === productId)
    // if (productIndex !== -1) {
    //   // Create a new array with the updated product
    //   state.products = [
    //     ...state.products.slice(0, productIndex),
    //     { ...state.products[productIndex], ...newData },
    //     ...state.products.slice(productIndex + 1)
    //   ]
    // }

editProduct:(state , action :{ payload: { product: Product } })=>{
  const indexToEdit = state.products.findIndex(())


  
}














    filteredItems: (state, action: { payload: { productId: number } }) => {
      const filteredItems = state.products.filter(
        (product) => product.id !== action.payload.productId
      )
      state.products = filteredItems
    }
  }
})
export const { removeProduct, addProduct, productsRequest, productsSuccess, editProduct } =
  userSlice.actions
export default userSlice.reducer
