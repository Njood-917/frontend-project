import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { productsRequest, productsSuccess, Product } from '../redux/slices/products/productSlice'
import {
  categoriesRequest,
  categoriesSuccess,
  setSelectedCategory
} from '../redux/slices/products/categorySlice'
import { AppDispatch, RootState } from '../redux/store'
import api from '../api'
import { Link } from 'react-router-dom'

export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state)
  const products = state.products
  const categories = state.categories
  useEffect(() => {
    handleGetProducts()
    handleGetCategories()
  }, [])

  const handleGetCategories = () => {
    dispatch(categoriesRequest())

    api
      .get('/mock/e-commerce/categories.json')
      .then((res) => dispatch(categoriesSuccess(res.data)))
      .catch((error) => console.error('Error fetching categories:', error))
  }

  const handleGetProducts = async () => {
    dispatch(productsRequest())

    const res = await api.get('/mock/e-commerce/products.json')
    dispatch(productsSuccess(res.data))
  }

  const Products: Product[] = state.products.products
  const selectedCategoryId: number | null = state.categories.selectedCategoryId

  const filterProductsbyCategory = (categoryId: number | null, productsList: Product[]) => {
    if (categoryId == null) {
      return productsList
    }

    return productsList.filter((product) => product.categories.includes(categoryId as number))
    if (filteredProducts.length === 0) {
      // If no products match the category, return the original productsList
      return productsList
    }
  }

  const filteredProducts = filterProductsbyCategory(selectedCategoryId, Products)

  const handleCategoryChange = (categoryId: number) => {
    dispatch(setSelectedCategory(categoryId))
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div>
          <label htmlFor="category">Select a category:</label>
          <select
            id="category"
            onChange={(e) => handleCategoryChange(Number(e.target.value))}
            value={state.categories.selectedCategoryId || ''}>
            <option value="">All Categories</option>
            {categories.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {products.isLoading && <h3>Loading products...</h3>}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <Link to={`products/${product.id}`} key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper ."
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <Link to={`products/${product.id}`}>
                <button className="mt-1 text-lg font-medium text-gray-900">More detailes</button>
              </Link>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
