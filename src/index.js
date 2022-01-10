import { render } from "react-dom"
import Router from "./router"
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "./context/authContext"

render(
  <AuthProvider>
    <Router />
  </AuthProvider>,
  document.getElementById("root")
)