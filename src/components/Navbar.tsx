import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import userSlice from '../redux/slices/products/userSlice'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'
import UserProfile from './UserProfile'
export default function Navbar() {
  const { isLoggedIn, isAdmin, userData } = useSelector((state: RootState) => state.usersR)
  const dispatch: AppDispatch = useDispatch()

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
                  <div className="flex">
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
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div className="">
                      <select
                        defaultValue=""
                        className=""
                        onChange={(e) => {
                          const selectedOption = e.target.value
                          if (selectedOption === '/visitor') {
                            // Navigate to the visitor/profile page
                            window.location.href = '/visitor'
                          } else if (selectedOption === '/logout') {
                            // Navigate to the logout page
                            window.location.href = '/logout'
                          }
                        }}>
                        <option value="" disabled>
                          {userData?.firstName}
                        </option>
                        <option value="/visitor">Profile</option>
                        <option value="/logout">Logout</option>
                      </select>
                    </div>
                  </div>
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

              {isLoggedIn && (
                <>
                  <li>
                    <Link
                      to={`/${userData?.role}`}
                      className="group focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg">
                      {userData?.firstName}
                      👤
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <button className="flex md:hidden hover:bg-gray-100 p-2 rounded-full transition-all focus:ring focus:ring-purple-500 focus:ring-opacity-25 active:bg-gray-200 outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </section>
        </div>
      </nav>
    </div>
  )
}
