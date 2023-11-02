import { Outlet } from 'react-router'
import { Login } from './Login'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux/es/exports'

const useAuth = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.usersR)
  const { isAdmin } = useSelector((state: RootState) => state.usersR)

  return isLoggedIn && isAdmin
}
const AdminRoute = () => {
  const isAuth = useAuth()
  return <div>{isAuth ? <Outlet /> : <Login />}</div>
}
export default AdminRoute
