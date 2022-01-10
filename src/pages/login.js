import { Card, Form, Button, FloatingLabel } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"

const Login = () => {
  const [name, setName] = useState("")
  const [trip, setTrip] = useState("")
  const [password, setPassword] = useState("")

  const onClick = () => {
    if (name && trip && password) {
      axios.post("http://localhost:4000/login/", {
        name: name,
        trip: trip,
        password: password
      })
        .then((res) => {
          localStorage.setItem("token", res.data.token.token)
        })
        .catch((err) => {
          alert("パスワードが違います")
        })
    } else {
      alert("空欄があります")
    }
  }

  return (
    <main className="form-signin">

      <h1 className="h3 mb-3 fw-normal" style={{ textAlign: "center" }}>Please Login</h1>

      <FloatingLabel controlId="floatingName" label="Name">
        <Form.Control type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTrip" label="Trip">
        <Form.Control type="text" placeholder="Trip" onChange={(e) => setTrip(e.target.value)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </FloatingLabel>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={onClick}>
          Login
        </Button>
      </div>
    </main>
  )
}

export default Login