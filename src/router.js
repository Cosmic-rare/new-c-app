import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import App from "./App"
import Login from "./pages/login"
import Index from "./pages/index"
import Chat from "./pages/chat"

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="channels">
            <Route path=":roomId" element={<Chat />} />
          </Route>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router