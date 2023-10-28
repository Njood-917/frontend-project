import React from 'react'
// import { AppDispatch, RootState } from '../redux/store'
// import { Root } from 'react-dom/client'
// import { useDispatch, useSelector } from 'react-redux'
// import { login, userRequest, userSuccess } from '../redux/slices/products/userSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Outlet } from 'react-router-dom'
import Login from './Login'

const ProtectedRoute = () => {
  //   const dispatch = useDispatch<AppDispatch>()
  //   const state = useSelector((state: RootState) => state.usersR)
  //   const users = state.users

  const { isLoggedIn } = useSelector((state: RootState) => state.usersR)
  return isLoggedIn ? <Outlet /> : <Login />
}

export default ProtectedRoute
