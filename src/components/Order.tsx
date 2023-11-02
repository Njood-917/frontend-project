import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ordersRequest, ordersSuccess } from '../redux/slices/products/orderSlice'
import { AppDispatch, RootState } from '../redux/store'

import api from '../api'

export function Order() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state.orders)
  const orders = state.orders
  const isLoading = state.isLoading

  useEffect(() => {
    handleGetOrders()
  }, [])

  const handleGetOrders = async () => {
    dispatch(ordersRequest())

    // Fetching from the local files
    const res = await api.get('/mock/e-commerce/orders.json')
    // At this point we have the data so let's update the store
    dispatch(ordersSuccess(res.data))
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      {isLoading && <h3>Loading orders...</h3>}
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Product ID
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Purchased At
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              User ID
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              User Name
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-normal text-gray-900">{order.productId}</td>
              <td className="px-6 py-4 font-normal text-gray-900">{order.purchasedAt}</td>
              <td className="px-6 py-4 font-normal text-gray-900">{order.userId}</td>
              <td className="px-6 py-4 font-normal text-gray-900">{order.firstName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
