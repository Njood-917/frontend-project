import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Outlet } from 'react-router-dom'
import { Login } from './Login'

const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.usersR)

  return isLoggedIn ? <Outlet /> : <Login />
}

export default ProtectedRoute
