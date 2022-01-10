import { Outlet, Link } from "react-router-dom"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import axios from "./plugins/axios"
import { useState } from "react"
import { useAuthContext } from "./context/authContext"

const App = () => {
  const { token } = useAuthContext()

  const logout = () => {
    axios.post("login/logout", {
      token: localStorage.getItem("token")
    })
    localStorage.removeItem("token")
  }

  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Link className="navbar-brand" to="/">Index</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {token ?
                <div />
                :
                <Link className="nav-link" to="/login">Login</Link>
              }
            </Nav>
            <div className="d-flex">
              {token ?
                <Button variant="outline-success" onClick={logout}>Logout</Button>
                :
                <div />
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  )
}

export default App
