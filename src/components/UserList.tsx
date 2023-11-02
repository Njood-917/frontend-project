/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRequest, userSuccess, removeUser } from '../redux/slices/products/userSlice'
import { AppDispatch, RootState } from '../redux/store'
import api from '../api'

export function UserList() {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: RootState) => state.usersR)
  const users = state.users
  const isLoading = state.isLoading

  useEffect(() => {
    handleGetUserList()
  }, [])

  const handleGetUserList = async () => {
    dispatch(userRequest())

    const res = await api.get('/mock/e-commerce/users.json')
    dispatch(userSuccess(res.data))
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      {isLoading && <h3>Loading categories...</h3>}
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Email
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Role
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Team
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={user.profileImageUrl} // Replace with actual property
                    alt={user.firstName} // Replace with actual property
                  />
                  <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{user.firstName}</div>
                  <div className="font-medium text-gray-700">{user.lastName}</div>
                </div>
              </th>
              <td className="px-6 py-4 font-normal text-gray-900">{user.email}</td>
              <td className="px-6 py-4 font-normal text-gray-900">{user.role}</td>
              <td className="px-6 py-4 font-normal text-gray-900">{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
