import { Card, Form, Button, FloatingLabel } from "react-bootstrap"

const Login = () => {
  return (
    <main className="form-signin">

      <h1 className="h3 mb-3 fw-normal" style={{ textAlign: "center" }}>Please Login</h1>

      <FloatingLabel controlId="floatingName" label="Name">
        <Form.Control type="name" placeholder="Name" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTrip" label="Trip">
        <Form.Control type="text" placeholder="Trip" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

      <div className="d-grid gap-2">
        <Button variant="primary">
          Login
        </Button>
      </div>
    </main>
  )
}

export default Login