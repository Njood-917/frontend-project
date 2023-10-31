import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
  isLoggedIn: boolean // every body know if the user logged in
  userData: User | null // i can use the data from anywhere
  isAdmin: boolean
  currentUser: User | null
}
const initialState: UserState = {
  users: [],
  error: null,
  isLoading: false,
  isLoggedIn: false,
  isAdmin: false,
  userData: null,
  currentUser: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true
      state.userData = action.payload
    },
    Adminlogin: (state, action: PayloadAction<User>) => {
      if (state.userData?.role === 'admin') {
        state.isAdmin = true
        state.userData = action.payload
      }
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.userData = null
    },

    userRequest: (state) => {
      state.isLoading = true
    },
    userSuccess: (state, action) => {
      state.isLoading = false
      state.users = action.payload
    },
    removeUser: (state, action: { payload: { userId: number } }) => {
      const filteredItems = state.users.filter((user) => user.id !== action.payload.userId)
      state.users = filteredItems
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const { userRequest, userSuccess, login, removeUser, logout, getError, Adminlogin } =
  userSlice.actions
export default userSlice.reducer
