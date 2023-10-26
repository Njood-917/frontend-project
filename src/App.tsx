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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetailes />} />
        <Route path="/products/edit/:id" element={<EditProductWrapper />} />
        <Route path="/admainPage" element={<AdminPage />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/productManger" element={<ProductsManager />} />
        <Route path="/order" element={<Order />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  )
}

export default App
