import { createSlice } from '@reduxjs/toolkit'

export type Category = {
  id: number
  name: string
  image: string
}
export type CategoryState = {
  categories: Category[]
  error: null | string
  isLoading: boolean
  selectedCategoryId: number
}
const initialState: CategoryState = {
  categories: [],
  selectedCategoryId: 0,
  error: null,
  isLoading: false
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    categoriesRequest: (state) => {
      state.isLoading = true
    },
    categoriesSuccess: (state, action) => {
      state.isLoading = false
      state.categories = action.payload
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategoryId = action.payload
    }
  }
})

export const { categoriesSuccess, categoriesRequest, setSelectedCategory } = categorySlice.actions
export default categorySlice.reducer
