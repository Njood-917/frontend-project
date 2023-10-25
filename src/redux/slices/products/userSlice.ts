import { createSlice } from '@reduxjs/toolkit'

export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
}
export type UserState = {
  users: User[]
  error: null | string
  isLoading: boolean
}
const initialState: UserState = {
  users: [],
  error: null,
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRequest: (state) => {
      state.isLoading = true
    },
    userSuccess: (state, action) => {
      state.isLoading = false
      state.users = action.payload
    }
  }
})

export const { userRequest, userSuccess } = userSlice.actions
export default userSlice.reducer
