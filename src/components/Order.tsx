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
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {isLoading && <h3> Loading categories...</h3>}
      <div className="card grid gap-4">
        <h1>List of User</h1>
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="flex items-center justify-center gap-4 text-2xl mb-2">
              <h5>{order.productId}</h5>
              <p>{order.purchasedAt}</p>
              <p>{order.userId}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
