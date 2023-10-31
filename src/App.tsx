import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
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
import CategoriesForm from './components/CategoriesForm'
import UserProfile from './components/UserProfile'
import EditProfile from './components/EditProfile'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.usersR.isLoggedIn)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>

        <Route path="/category" element={<Category />} />
        <Route path="/products/:id" element={<ProductDetailes />} />
        <Route path="/cart" element={<Cart />} />

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<ProductsManager />} />
          <Route path="/categoryForm" element={<CategoriesForm />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
