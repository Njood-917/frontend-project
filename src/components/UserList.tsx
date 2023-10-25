import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userRequest, userSuccess } from '../redux/slices/products/userSlice'
import { AppDispatch, RootState } from '../redux/store'

import api from '../api'

export function UserList() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state.users)
  const users = state.users
  const isLoading = state.isLoading

  useEffect(() => {
    handleGetUserList()
  }, [])

  const handleGetUserList = async () => {
    // let's first turn the loader to true so we can have a better UX
    dispatch(userRequest())

    // Fetching from the local files
    const res = await api.get('/mock/e-commerce/users.json')
    // At this point we have the data so let's update the store
    dispatch(userSuccess(res.data))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {isLoading && <h3> Loading categories...</h3>}
      <div className="card grid gap-4">
        <h1>List of User</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-center gap-4 text-2xl mb-2">
              <h5>{user.firstName}</h5>
              <p>{user.email}</p>
              <p>{user.password}</p>
              <p>{user.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
