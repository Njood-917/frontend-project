import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  productsRequest,
  productsSuccess,
  removeProduct
} from '../redux/slices/products/productSlice'
import { AppDispatch, RootState } from '../redux/store'
// import { NewProductWrapper } from './NewProductWrapper'
import api from '../api'

export function ProductsManager() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state)
  const products = state.products

  useEffect(() => {
    handleGetProducts()
  }, [])

  const handleGetProducts = async () => {
    // let's first turn the loader to true so we can have a better UX
    dispatch(productsRequest())

    // Fetching from the local files
    const res = await api.get('/mock/e-commerce/products.json')
    // At this point we have the data so let's update the store
    dispatch(productsSuccess(res.data))
  }
  // Function to handle the edit button click
  //   const handleEditClick = (ProductState) => {

  //   const updatedName = "New Name";
  //   const updatedDescription ="New Description";
  //   const updatedCategories = ["Category1", "Category2"];
  // }

  //   const updatedProduct = {
  //   ...produc,
  //   name: updatedName,
  //   description: updatedDescription;
  //   categories: updatedCategories;
  // }
  return (
    <div>
      <Link to={'/category'}>
        <button>category</button>
      </Link>
      <Link to={'/userList'}>
        <button>users</button>
      </Link>
      <Link to={'/order'}>
        <button>orders</button>
      </Link>

      <div className="grid grid-cols-3 gap-4">
        {products.isLoading && <h3>Loading products...</h3>}
        {products.products.map((product) => (
          <div key={product.id} className="card flex flex-col items-center text-2xl mb-2">
            <img src={product.image} alt={product.name} width="100" />
            <span>{product.name}</span>
            <button
              className="text-red-400 text-xs"
              onClick={() => dispatch(removeProduct({ productId: product.id }))}>
              🗑️
            </button>
            <Link to={`/products/edit/${product.id}`}>
              <button className="text-red-400 text-xs">Edit</button>
            </Link>
            {/* <button
              className="text-red-400 text-xs"
              onClick={() =>  dispatch(editProducts({ product: updatedProduct }))}>
              Edit
            </button> */}
          </div>
        ))}
      </div>
    </div>
  )
}
