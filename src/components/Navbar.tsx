import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="header">
      <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
        <div className="flex items-center flex-shrink-0 tex-green mr-6"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              to={'/'}
              className="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-green-500 mr-4">
              Home
            </Link>
            <Link
              to={'/Category'}
              className="block mt-4 lg:inline-block lg:mt-0 text-yellow-500 hover:text-green-500">
              Category
            </Link>
          </div>
          <div>
            <Link
              to={'/login'}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Login
            </Link>
            <Link
              to={'/Cart'}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Cart
            </Link>
            <Link
              to={'/productManger'}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-yellow border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
              Admain
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
