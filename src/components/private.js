import { 
  Outlet,
  Navigate
} from "react-router"

const Private = (props) => {
  const { auth } = props

  if(!auth) {
    return(
      <Navigate to="login" />
    )
  }

  return(
    <Outlet />
  )
}

export default Private