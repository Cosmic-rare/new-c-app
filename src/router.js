import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import App from "./App"
import Login from "./pages/login"
import Index from "./pages/index"
import Chat from "./pages/chat"
import Private from "./components/private"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />

          <Route element={<Private />}>

            <Route path="channels">
              <Route path=":roomId" element={<Chat />} />
            </Route>

            <Route index element={<Index />} />

          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router