import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import userSlice from '../redux/slices/products/userSlice'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import UserProfile from './UserProfile'

export default function Navbar() {
  const { isLoggedIn, isAdmin, userData, logout } = useSelector((state: RootState) => state.usersR)
  const dispatch: AppDispatch = useDispatch()
  function handleLogout() {
    dispatch(logout())
  }

  return (
    <div className="header">
      <nav className="w-full py-6 bg-green-70 w-screen">
        <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
          <section className="flex items-center text-gray-900 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"></svg>

            <a className="font-bold text-xl focus:ring focus:ring-yellow-500 focus:ring-opacity-25 outline-none rounded-lg">
              Health Care
            </a>
          </section>
          <section>
            <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex">
              {isLoggedIn && !isAdmin && (
                <li className="relative group">
                  <div className="flex"></div>
                  <div className="w-full h-0.5 bg-transparent group-hover:bg-yellow-500 transition-al absolute bottom-0" />
                </li>
              )}
              {!isAdmin && (
                <>
                  <li className="relative group">
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-yellow-500 transition-al absolute bottom-0" />
                  </li>
                  <li className="relative group">
                    <Link
                      to="/"
                      className="group focus:ring focus:bg-yellow-500 focus:ring-opacity-25 outline-none rounded-lg">
                      {' '}
                      Home{' '}
                    </Link>
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-yellow-500 transition-al absolute bottom-0" />
                  </li>
                  <li className="relative group">
                    <Link
                      to="/about"
                      className="focus:ring focus:ring-yellow-500 focus:ring-opacity-25 outline-none rounded-lg">
                      About
                    </Link>
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-yellow-500 transition-al absolute bottom-0" />
                  </li>
                  <li className="relative group">
                    <Link
                      to="/cart"
                      className="focus:ring focus:bg-yellow-500 focus:ring-opacity-25 outline-none rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                    </Link>
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-yellow-500 transition-al absolute bottom-0" />
                  </li>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="bg-yellow-300 px-4 py-1 rounded-xl text-white hover:bg-yellow-500 active:bg-yellow-500focus:ring focus:bg-yellow-500 focus:ring-opacity-25 outline-none">
                      Login
                    </Link>
                  </li>
                </>
              )}

              {isLoggedIn && isAdmin && (
                <>
                  <li className="relative group">
                    <Link
                      to="/admin"
                      className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">
                      Products
                    </Link>
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </li>

                  <li className="relative group">
                    <Link
                      to="/userList"
                      className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">
                      Users
                    </Link>
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </li>
                  <li className="relative group">
                    <Link
                      to="/order"
                      className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">
                      Orders
                    </Link>
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </li>

                  <li className="relative group">
                    <Link
                      to="/categoryForm"
                      className="focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">
                      Categories
                    </Link>
                    <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
                  </li>
                </>
              )}

              {isLoggedIn !== null && (
                <>
                  <li className="relative group">
                    <Link
                      className="bg-yellow-300 px-4 py-1 rounded-xl text-white hover:bg-yellow-500 active:bg-yellow-500focus:ring focus:bg-yellow-500 focus:ring-opacity-25 outline-none"
                      onClick={handleLogout}
                      to={'/'}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  <li>
                    <Link
                      to={`/${userData?.role}`}
                      className="group focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">
                      👤{userData?.firstName}
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </section>
        </div>
      </nav>
    </div>
  )
}
