// import React, { useState } from 'react'
// // import { registerUser } from '../api'
// import api from '../api'

// export default function Register() {
//   const [user, setUser] = useState({
//     email: '',
//     password: ''
//   })

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUser({ ...user, [event.target.name]: event.target.value })
//   }

//   const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()

//     try {
//       const response = await api.post('http://localhost:3000/user')
//       method:'post',
//       headers:{'content-type':'users.json'}
//       console.log(response.data)
//     } catch (error) {
//       console.error('Error registering user:', error)
//     }
//   }
//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleRegister}>
//         <label>Email:</label>
//         <input type="email" name="email" value={user.email} onChange={handleInputChange} required />
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={user.password}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   )
// }
