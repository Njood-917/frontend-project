import { useEffect } from 'react'
import {
  Route,
  redirect,
  Navigate,
  Outlet,
  useNavigate,
  useLocation,
  OutletProps
} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import React from 'react'
interface DecodedToken {
  role: string // Adjust the type based on the actual structure of your decoded token
}
// eslint-disable-next-line react/prop-types
interface ProtectedRouteProps {
  expectedRole: string // You can replace 'string' with a more specific type if needed
}

const ProtectedRouteAdmin = (props: JSX.IntrinsicAttributes & OutletProps) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  function presentPage() {
    navigate(-1)
  }

  if (!token) return <Navigate to="/" />

  useEffect(() => {
    if (token) {
      try {
        const decodedData = jwtDecode(token) as { role: string } // Adjust the type based on your actual decoded data structure
        if (decodedData.role !== 'admin') {
          presentPage()
        }
      } catch (error) {
        // Handle decoding error if necessary
        presentPage()
      }
    } else {
      presentPage()
    }
  }, [token])

  if (token) {
    const decodedData = jwtDecode(token) as { role: string } // Adjust the type based on your actual decoded data structure
    if (decodedData.role === 'admin') {
      return <Outlet {...props} />
    } else {
      // Redirect or handle the case where the role is not 'user'
      presentPage()
      return null // or return a Redirect component
    }
  }

  // Handle the case where token is not available
  return <Navigate to="/" />
}

export default ProtectedRouteAdmin
