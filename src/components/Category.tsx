import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { categoriesSuccess, categoriesRequest } from '../redux/slices/products/categorySlice'
import { AppDispatch, RootState } from '../redux/store'
import styles from './Category.module.css'
// import { NewProductWrapper } from './NewProductWrapper'
import api from '../api'

export function Category() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state.categories)
  const categories = state.categories
  const isLoading = state.isLoading

  useEffect(() => {
    handleGetCategories()
  }, [])

  /**
   * If you want to keep things simple you can follow this approach on updating
   * redux state when using async requests instead of using createAsyncThunk
   */
  const handleGetCategories = async () => {
    // let's first turn the loader to true so we can have a better UX
    dispatch(categoriesRequest())

    // Fetching from the local files
    const res = await api.get('/mock/e-commerce/categories.json')
    // At this point we have the data so let's update the store
    dispatch(categoriesSuccess(res.data))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {isLoading && <h3> Loading categories...</h3>}
      <div className="card grid gap-4">
        <h1>Category </h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id} className="flex items-center justify-center gap-4 text-2xl mb-2">
              <img src={category.image} width="100" />
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
