import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Product = {
  id: number
  name: string
  image: string
  description: string
  categories: number[]
  variants: string[]
  sizes: string[]
}

export type ProductState = {
  products: Product[]
  error: null | string
  isLoading: boolean
  selectedProduct: Product | null
  SearchTerm: string
}

const initialState: ProductState = {
  products: [],
  error: null,
  isLoading: false,
  selectedProduct: null,
  SearchTerm: ''
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
    editProducts: (state, action: PayloadAction<{ product: Product }>) => {
      // const {id} = action.payload
      const index = state.products.findIndex((item) => item.id === action.payload.product.id)
      const updatedProducts = state.products.splice(index, 1, action.payload.product)
      return { ...state, products: updatedProducts }
    },
    filteredItems: (state, action: { payload: { productId: number } }) => {
      const filteredItems = state.products.filter(
        (product) => product.id !== action.payload.productId
      )
      state.products = filteredItems
    },
    searchProduct: (state, action) => {
      state.SearchTerm = action.payload
    }
  }
})
export const {
  removeProduct,
  addProduct,
  productsRequest,
  productsSuccess,
  editProducts,
  searchProduct
} = userSlice.actions
export default userSlice.reducer
