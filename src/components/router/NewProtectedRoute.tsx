/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

interface DecodedToken {
  role: string // Adjust the type based on the actual structure of your decoded token
}
// eslint-disable-next-line react/prop-types
interface ProtectedRouteProps {
  expectedRole: string // You can replace 'string' with a more specific type if needed
}
const NewProtectedRoute: React.FC<ProtectedRouteProps> = ({ expectedRole, ...props }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  function presentPage() {
    navigate('/')
  }

  if (!token) return <Navigate to="/" />

  useEffect(() => {
    try {
      const decodedToken = jwtDecode(token) as DecodedToken
      if (decodedToken.role !== expectedRole) {
        presentPage()
      }
    } catch (error) {
      // Handle decoding error if necessary
      presentPage()
    }
  }, [token, expectedRole])

  const decodedToken = jwtDecode(token) as DecodedToken
  return decodedToken?.role === expectedRole ? <Outlet {...props} /> : null
}

export default NewProtectedRoute
