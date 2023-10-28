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
    // <div classNameName="grid grid-cols-1 md:grid-cols-2 w-full">
    //   {isLoading && <h3> Loading categories...</h3>}
    //   <div classNameName="card grid gap-4">
    //     <h1>Category </h1>
    //     <ul>
    //       {categories.map((category) => (
    //         <li key={category.id} classNameName="flex items-center justify-center gap-4 text-2xl mb-2">
    //           <img src={category.image} width="100" />
    //           <span>{category.name}</span>
    //         </li>
    //       ))}
    //     </ul>3
    //   </div>
    // </div>
    <div className="container mx-auto p-4 lg:h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
            <img
              src={category.image}
              alt={`Img by ${category.name}`}
              className="w-full h-150px object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
              <h1 className="text-2xl font-semibold">{category.name}</h1>
              {/* <p className="mt-2">{category.name}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
