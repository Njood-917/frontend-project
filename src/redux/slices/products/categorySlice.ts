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
    },
    addCategory: (state, action) => {
      state.categories = [action.payload.category, ...state.categories]
    },
    removeCategory: (state, action: { payload: { categoryId: number } }) => {
      const filteredItems = state.categories.filter(
        (category) => category.id !== action.payload.categoryId
      )
      state.categories = filteredItems
    },
    updateCategory: (state, action: { payload: { editCategory: Category } }) => {
      const filteredItems = state.categories.filter(
        (product) => product.id !== action.payload.editCategory.id
      )
      state.categories = filteredItems
      state.categories = [action.payload.editCategory, ...state.categories]
    }
  }
})

export const {
  categoriesSuccess,
  categoriesRequest,
  setSelectedCategory,
  addCategory,
  removeCategory,
  updateCategory
} = categorySlice.actions
export default categorySlice.reducer
