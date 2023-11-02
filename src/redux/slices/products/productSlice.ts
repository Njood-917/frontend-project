import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Product = {
  id: number
  name: string
  image: string
  description: string
  categories: number[]
  variants: string[]
  sizes: string[]
  price: number
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
    addProduct: (state, action) => {
      // let's append the new product to the beginning of the array
      state.products = [action.payload.product, ...state.products]
    },
    removeProduct: (state, action: { payload: { productId: number } }) => {
      const filteredItems = state.products.filter(
        (product) => product.id !== action.payload.productId
      )
      state.products = filteredItems
    },

    editProduct: (state, action: { payload: { editedProduct: Product } }) => {
      const editedProduct = action.payload.editedProduct

      state.products = state.products.map((product) =>
        product.id === editedProduct.id ? editedProduct : product
      )
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
  editProduct,
  searchProduct
} = userSlice.actions
export default userSlice.reducer
