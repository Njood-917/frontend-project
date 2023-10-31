import { useEffect, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'

import {
  productsRequest,
  productsSuccess,
  Product,
  searchProduct
} from '../redux/slices/products/productSlice'
import {
  categoriesRequest,
  categoriesSuccess,
  setSelectedCategory
} from '../redux/slices/products/categorySlice'
import { addToCart } from '../redux/slices/products/cartSlice'
import { AppDispatch, RootState } from '../redux/store'
import api from '../api'
import { Link } from 'react-router-dom'
import styles from './MainPage.module.css'
import { colors } from '@mui/material'
import { red } from '@mui/material/colors'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
export default function MainPage() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state)
  const products = state.products
  const categories = state.categories
  const searchTerm = useSelector((state: RootState) => state.products.SearchTerm)
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

  const productsList: Product[] = state.products.products
  const selectedCategoryId: number = state.categories.selectedCategoryId

  const filterProductsbyCategory = (categoryId: number, productsList: Product[]) => {
    if (categoryId == 0) {
      return productsList
    }

    return productsList.filter((product) => product.categories.includes(categoryId as number))
    if (filteredProducts.length === 0) {
      // If no products match the category, return the original productsList
      return productsList
    }
  }

  const filteredProducts = filterProductsbyCategory(selectedCategoryId, productsList)

  const handleCategoryChange = (categoryId: number) => {
    dispatch(setSelectedCategory(categoryId))
  }
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchProduct(event.target.value))
  }
  const filterProductbySearch = (products: Product[], searchKeyWord: string) => {
    return searchKeyWord
      ? products.filter((product) =>
          product.name.toLocaleLowerCase().includes(searchKeyWord.toLocaleLowerCase())
        )
      : products
  }

  const filteredAndSearchedProducts = filterProductbySearch(filteredProducts, searchTerm)

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
            <option value={0}>All Categories</option>
            {categories.categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2> search Product</h2>

          <input
            type="text"
            name="SearchByname"
            placeholder="Search by name here .."
            onChange={handleSearch}
            value={searchTerm}
            style={{ width: '150px', padding: '7px' }}
          />
        </div>
        <div className="grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
          {products.isLoading ? (
            <h3 style={{ textAlign: 'center', color: 'red' }}>Loading products...</h3>
          ) : (
            filteredAndSearchedProducts.map((product) => (
              <div key={product.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.image}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper ."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-green-800">{product.name}</h3>
                <Link to={`products/${product.id}`}>
                  <Button variant="contained" color="success" size="small">
                    detailes
                  </Button>
                </Link>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="mt-1 ml-3 text-lg font-medium text-yellow-300">
                  <ShoppingCartIcon data-testid="ShoppingCartIcon" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <footer className="bg-yellow-200 rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-green-800 md:text-center dark:text-green-800 font-bold">
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:color:yellow">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-green-800 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
