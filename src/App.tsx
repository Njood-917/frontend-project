import './App.css'
import { Home } from './components/Home'
import { Routes, Route } from 'react-router-dom'
import ProductDetailes from './components/ProductDetailes'

import { UserList } from './components/UserList'
import { ProductsManager } from './components/ProductsManager'
import { Order } from './components/Order'
import { Category } from './components/Category'

import MainPage from './components/MainPage'
import Cart from './components/Cart'
import { Login } from './components/Login'
import AdminRoute from './components/AdminRoute'
import UserProfile from './components/UserProfile'
import CategoriesForm from './components/CategoriesForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="user" element={<MainPage />} />
        <Route path="user/profile" element={<UserProfile />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products/:id" element={<ProductDetailes />} />

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<ProductsManager />} />
          <Route path="/categoryForm" element={<CategoriesForm />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/order" element={<Order />} />
          {/* <Route path="/products/edit/:id" element={<EditProductWrapper />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
