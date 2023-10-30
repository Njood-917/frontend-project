import { Routes, Route } from 'react-router-dom'
import { Login } from '../Login'
import { ProductsManager } from '../ProductsManager'
import Cart from '../Cart'
import NewProtectedRoute from './NewProtectedRoute'

export const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route element={<NewProtectedRoute expectedRole="admin" />}>
        <Route path="/productManager" element={<ProductsManager />} />
      </Route>

      <Route element={<NewProtectedRoute expectedRole="user" />}>
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
