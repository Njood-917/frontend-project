// import React, { ChangeEvent, FormEvent, useState } from 'react'
// import { Root } from 'react-dom/client'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { AppDispatch, RootState } from '../redux/store'

// import { login, userRequest, userSuccess } from '../redux/slices/products/userSlice'
// import { useEffect } from 'react'

// import api from '../api'
// export default function Login() {
//   //   const { users } = useSelector((state: RootState) => state.usersR)
//   //   const dispatch: AppDispatch = useDispatch()
//   //   useEffect(() => {
//   //     dispatch(fetchUser())
//   //   }, [])

//   //   const navigate = useNavigate()
//   const dispatch = useDispatch<AppDispatch>()
//   const state = useSelector((state: RootState) => state.usersR)
//   const users = state.users

//   useEffect(() => {
//     handleGetUserList()
//   }, [])

//   const handleGetUserList = async () => {
//     dispatch(userRequest())

//     const res = await api.get('/mock/e-commerce/users.json')
//     dispatch(userSuccess(res.data))
//   }
//   const [user, setUser] = useState({
//     email: '',
//     password: ''
//   })

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setUser((prevState) => {
//       return { ...prevState, [event.target.name]: event.target.value }
//     })
//   }

//   const handleSubmit = async (event: FormEvent) => {
//     console.log(users)
//     event.preventDefault()
//     try {
//       console.log(user)
//       const foundUser = users.find((userData) => userData.email === user.email)
//       if (foundUser && foundUser.password === user.password) {
//         // should be loginin
//         dispatch(login(foundUser))
//       } else {
//         console.log('somthing wrong')
//       }
//       console.log(foundUser)
//     } catch (error) {
//       console.log(error, 'error')
//     }
//   }

//   return (
//     <div>
//       <section className="bg-gray-50 dark:bg-gray-900">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//           <a
//             href="#"
//             className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//             Flowbite
//           </a>
//           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Sign in to your account
//               </h1>
//               <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="name@company.com"
//                     onChange={handleInputChange}
//                     value={user.email}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     value={user.password}
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-start">
//                     <div className="flex items-center h-5">
//                       <input
//                         id="remember"
//                         aria-describedby="remember"
//                         type="checkbox"
//                         className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       />
//                     </div>
//                     <div className="ml-3 text-sm">
//                       <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
//                         Remember me
//                       </label>
//                     </div>
//                   </div>
//                   <a
//                     href="#"
//                     className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
//                     Forgot password?
//                   </a>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full text-black bg-primary-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
//                   Sign in
//                 </button>
//                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Don’t have an account yet?{' '}
//                   <a
//                     href="#"
//                     className="font-medium text-primary-600 hover:underline dark:text-primary-500">
//                     Sign up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import React, { useState } from 'react'
// import NavBar from '../components/Home/NavBar'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Login() {
  const [userLogin, setUserLogin] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  })

  function getUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserLogin({ ...userLogin, name: event.target.value })
  }
  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserLogin({ ...userLogin, email: event.target.value })
  }
  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(userLogin)
    setUserLogin({ ...userLogin, name: '', email: '' })
  }
  return (
    <div className="loginPage">
      {/* <NavBar /> */}
      <h1> Login</h1>

      <div className="formContainer">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            '& > :not(style)': {
              m: 1,
              width: 560,
              height: 423,
              color: '#f4f4f4'
            }
          }}>
          <Paper
            sx={{
              width: 500,
              height: 300,
              bgcolor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 4
            }}>
            <form onSubmit={onSubmitHandler}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getUserName}
                value={userLogin.name}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={getUserEmail}
                value={userLogin.email}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  marginTop: 6,
                  bgcolor: '#73906f'
                }}>
                Submit
              </Button>
            </form>
          </Paper>
        </Box>
      </div>
    </div>
  )
}