import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest, userSuccess, removeUser } from '../redux/slices/products/userSlice'
import { AppDispatch, RootState } from '../redux/store'
import api from '../api'

const UserProfile = () => {
  // Replace this with actual user details from the Redux store
  const user = useSelector((state: RootState) => state.usersR.currentUser)
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state.usersR)
  const isLoading = state.isLoading

  useEffect(() => {
    handleGetUserList()
  }, [])

  const handleGetUserList = async () => {
    // Let's first turn the loader to true for a better UX
    dispatch(userRequest())

    // Fetching from the local files
    try {
      const res = await api.get('/mock/e-commerce/users.json')
      // At this point, we have the data, so let's update the store
      dispatch(userSuccess(res.data))
    } catch (error) {
      // Handle errors, e.g., dispatch an action to set an error state
      console.error('Error fetching user list:', error)
    }
  }

  return (
    <div>
      <h1>Welcome, {user?.firstName}!</h1>
      <p>Email: {user?.email}</p>

      <Link to="/edit-profile">
        <button>Edit Profile</button>
      </Link>
    </div>
  )
}

export default UserProfile
