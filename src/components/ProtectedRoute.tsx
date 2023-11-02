import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Outlet } from 'react-router-dom'
import { Login } from './Login'

const useAuth = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.usersR)

  return isLoggedIn
}
const ProtectedRoute = () => {
  const isAuth = useAuth()
  return <div>{isAuth ? <Outlet /> : <Login />}</div>
}
export default ProtectedRoute
