import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import userSlice from '../redux/slices/products/userSlice'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
export default function Navbar() {
  const dispatch: AppDispatch = useDispatch()
  const handleLogout = () => {
    // dispatch(logout())
  }
  return (
    <div className="header">
      <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
        <div className="flex items-center flex-shrink-0 tex-green mr-6"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to={'/'}
              className="  text-lg font-bold block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-green-900 mr-4">
              Home
            </Link>
            <Link
              to={'/category'}
              className=" text-lg font-bold block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-green-900">
              Category
            </Link>
          </div>
          <div>
            <Link
              to={'/login'}
              className="inline-block font-bold text-lg px-4 py-2 leading-none border rounded text-yellow-500 border-white hover:border-transparent hover:text-green-900 hover:bg-white mt-4 lg:mt-0">
              Login
            </Link>
            <Link
              to={'/cart'}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow-500 border-white hover:border-transparent hover:text-green-900 hover:bg-white mt-4 lg:mt-0">
              <ShoppingCartIcon data-testid="ShoppingCartIcon" />
            </Link>
            {/* <Link
              to={'/admin'}
              className=" font-bold inline-block text-sm px-4 py-2 leading-none border rounded text-yellow border-white hover:border-transparent hover:text-green-900 hover:bg-white mt-4 lg:mt-0">
              Admain
            </Link>
            <Link to="../edit-profile">Edit Profile</Link> */}
          </div>
        </div>
      </nav>
    </div>
  )
}
