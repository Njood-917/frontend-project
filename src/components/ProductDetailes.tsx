import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { useParams } from 'react-router'
import { Product } from '../redux/slices/products/productSlice'
import api from '../api'

export default function ProductDetails() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const products = useSelector((state: RootState) => state.products.products)
  console.log(products)

  const selectedProduct = products.find((product: Product) => product.id === Number(id))
  console.log(selectedProduct)

  if (!selectedProduct) {
    return <div>No product found.</div>
  }

  return (
    <div className=" flex justify-center items-center h-screen">
      <a
        href="#"
        className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-green-900 dark:text-white">
          {selectedProduct?.description}
        </h5>
        <h5 className="mb-2 text-xl tracking-tight text-green-900 dark:text-white">
          {selectedProduct?.sizes}
        </h5>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-green-900 dark:text-white">
          {selectedProduct?.variants}
        </h5>
        <img
          src={'/' + selectedProduct?.image}
          alt="Product"
          className="font-normal text-gray-700 dark:text-gray-400"
        />
      </a>
    </div>
  )
}
