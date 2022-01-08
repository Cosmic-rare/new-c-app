import { Outlet, Link } from "react-router-dom"
import { Navbar, Container, Nav, Button } from "react-bootstrap"


const App = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Link className="navbar-brand" to="/">Index</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="nav-link" to="/channels/928245869571112970">Channels</Link>
            </Nav>
            <div className="d-flex">
            <Button variant="outline-success">ChangeName</Button>
          </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  )
}

export default App
