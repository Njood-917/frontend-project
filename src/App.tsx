import './App.css'
import { Home } from './components/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDetailes from './components/ProductDetailes'

import { UserList } from './components/UserList'
import AdminPage from './components/AdminPage'
import { ProductsManager } from './components/ProductsManager'
import { Order } from './components/Order'
import { Category } from './components/Category'
import { EditProductWrapper } from './components/EditProductWrapper'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import MainPage from './components/MainPage'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/ProtectedRoute" element={<ProtectedRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<ProductsManager />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products/edit/:id" element={<EditProductWrapper />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/products/:id" element={<ProductDetailes />} />
      </Routes>
    </div>
  )
}

export default App
