import {
  Outlet,
  Navigate
} from "react-router"
import { useAuthContext } from "../context/authContext"

const Private = () => {

  const { token } = useAuthContext()

  if (token) {
    return (
      <Outlet />
    )
  } else {
    return (
      <Navigate to="login" />
    )
  }


}

export default Private